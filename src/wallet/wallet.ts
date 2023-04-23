import { ChainInfo } from "./chains";

import { useState } from 'react';
import { GasPrice } from "@cosmjs/stargate";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

interface KeplerWalletState {
  walletAddress: string
  signingClient: SigningCosmWasmClient
  gasPrice: GasPrice
}

export interface KeplrWallet {
  connect: () => Promise<void>
  disconnect: () => void
  isConnecting: boolean
  state: KeplerWalletState | null
}

async function connectKeplr() {

  const window = (global.window as any)

  if (window['keplr']) {
    if (window.keplr['experimentalSuggestChain']) {
      await window.keplr.experimentalSuggestChain(ChainInfo)
      await window.keplr.enable(ChainInfo.chainId)
    } else {
      console.error(
        'Error accessing experimental features, please update Keplr'
      )
    }
  } else {
    console.error('Error accessing Keplr, please install Keplr')
  }
}


export function useKeplerWalletState(): KeplrWallet {
  const [signingClient, setSigningClient] = useState<SigningCosmWasmClient | null>(null);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [gasPrice, setGasPrice] = useState<GasPrice | null>(null);

  const connect = async () => {
    setIsConnecting(true);

    try {
      await connectKeplr();
      const offlineSigner = await (window as any).getOfflineSigner(ChainInfo.chainId);

      const [{address}] = await offlineSigner.getAccounts();
      const client = await SigningCosmWasmClient.connectWithSigner(
        ChainInfo.rpc,
        offlineSigner,
      )

      setWalletAddress(address);
      setGasPrice(GasPrice.fromString('0.002uconst'));
      setSigningClient(client);
      setIsConnecting(false);
    } catch (error) {
      console.error(error);
      setIsConnecting(false);
    }
  };

  const disconnect = () => {
    if (signingClient) {
      signingClient.disconnect();
    }
    setWalletAddress('');
    setIsConnecting(false);
    setSigningClient(null);
    setGasPrice(null);
  };

  const state: KeplerWalletState | null = (walletAddress != null && signingClient != null && gasPrice != null)
    ? {
      walletAddress,
      signingClient,
      gasPrice,
    }
    : null

  return {
    connect,
    disconnect,
    isConnecting,
    state
  };
}
