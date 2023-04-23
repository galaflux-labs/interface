import { ChainInfo } from "./chains";

import { useState } from 'react';
// import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
// import { GasPrice } from '@cosmjs/stargate';

export interface KeplrWallet {
  connect: () => Promise<void>,
  disconnect: () => void,
  loading: boolean,
  error: any,
  state: {
    signingClient: any,
    address: string,
    gasPrice: any
  } | null
}

async function connectKeplr() {

  const window = (global.window as any)

  if (window['keplr']) {
    if (window.keplr['experimentalSuggestChain']) {
      await window.keplr.experimentalSuggestChain(ChainInfo)
      await window.keplr.enable(ChainInfo.chainId)
    } else {
      console.warn(
        'Error accessing experimental features, please update Keplr'
      )
    }
  } else {
    console.warn('Error accessing Keplr, please install Keplr')
  }
}


export function useKeplerWalletState(): KeplrWallet {
  const [signingClient, setSigningClient] = useState<any | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [gasPrice, setGasPrice] = useState<any | null>(null);

  const connect = async () => {
    setLoading(true);

    try {
      await connectKeplr();
      const offlineSigner = (await global.window as any).getOfflineSigner(ChainInfo.chainId);

      // get user address
      const [{address}] = await offlineSigner.getAccounts();
      setWalletAddress(address);
      // Gas price
      // setGasPrice(GasPrice.fromString('0.002utorii'));
      setGasPrice("sss")

      // make client
      setSigningClient(null)
        // await SigningCosmWasmClient.connectWithSigner(
        //   ChainInfo.rpc,
        //   offlineSigner,
        // ),
      // );

      setLoading(false);
    } catch (error) {
      setError(error);
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

  if (walletAddress != null && signingClient != null && gasPrice != null) {
    return {
      loading,
      error,
      connect,
      disconnect,
      state: {
        address: walletAddress,
        signingClient,
        gasPrice,
      }
    }
  } else {
    return {
      loading,
      error,
      connect,
      disconnect,
      state: null
    };
  }
}
