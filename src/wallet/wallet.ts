import { ChainInfo } from "./chains";

import { useState } from 'react';
// import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
// import { GasPrice } from '@cosmjs/stargate';

export interface KeplrWallet {
  connect: () => Promise<void>,
  disconnect: () => void,
  loading: boolean,
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
      console.error(
        'Error accessing experimental features, please update Keplr'
      )
    }
  } else {
    console.error('Error accessing Keplr, please install Keplr')
  }
}


export function useKeplerWalletState(): KeplrWallet {
  const [signingClient, setSigningClient] = useState<any | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [gasPrice, setGasPrice] = useState<any | null>(null);

  const connect = async () => {
    setLoading(true);

    try {
      await connectKeplr();
      const offlineSigner = await (global.window as any).getOfflineSigner(ChainInfo.chainId);

      // get user address
      const [{address}] = await offlineSigner.getAccounts();
      setAddress(address);
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
      alert(error)
    }
  };

  const disconnect = () => {
    if (signingClient) {
      signingClient.disconnect();
    }
    setAddress('');
    setSigningClient(null);
    setLoading(false);
    setGasPrice(null);
  };

  console.log(address)

  // if (address != null && signingClient != null && gasPrice != null) {
  if (address != null) {
    return {
      loading,
      connect,
      disconnect,
      state: {
        address,
        signingClient,
        gasPrice,
      }
    }
  } else {
    return {
      loading,
      connect,
      disconnect,
      state: null
    };
  }
}
