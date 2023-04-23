import { ChainInfo } from "./chains";

import { useState } from 'react';
import { GasPrice } from "@cosmjs/stargate";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

export interface KeplrWallet {
  connect: () => Promise<void>,
  disconnect: () => void,
  loading: boolean,

  walletAddress: any
  gasPrice: any
  signingClient: any
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
  const [signingClient, setSigningClient] =
    useState<any>(null);
  const [walletAddress, setWalletAddress] = useState<any>('');
  const [loading, setLoading] = useState<any>(false);
  const [gasPrice, setGasPrice] = useState<any>(null);

  const connect = async () => {
    setLoading(true);

    try {
      await connectKeplr();
      const offlineSigner = await (window as any).getOfflineSigner(ChainInfo.chainId);

      // get user address
      const [{address}] = await offlineSigner.getAccounts();
      setWalletAddress(address);
      // Gas price
      setGasPrice(GasPrice.fromString('0.002uconst'));

      // make client
      setSigningClient(
        await SigningCosmWasmClient.connectWithSigner(
          ChainInfo.rpc,
          offlineSigner,
        ),
      );

      setLoading(false);
    } catch (error) {
        console.error(error);
        setLoading(false);
    }
  };

  const disconnect = () => {
    if (signingClient) {
      signingClient.disconnect();
    }
    setWalletAddress('');
    setSigningClient(null);
    setLoading(false);
    setGasPrice(null);
  };

  return {
    walletAddress,
    signingClient,
    loading,
    connect,
    disconnect,
    gasPrice,
  };
}
