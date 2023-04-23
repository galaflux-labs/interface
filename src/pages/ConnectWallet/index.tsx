import { FC } from 'react';
import { Keplr } from "../../components/Icons/Wallets";
import { useKeplrWallet } from "../../wallet";
import ConnectKeplrButton from "./ConnectKeplrButton";

const ConnectWallet: FC = () => {

  const wallet = useKeplrWallet()

  return (
    <div className="space-y-3">
      <h1 className="text-4xl">
        Connect your wallet.
      </h1>
      <h2 className="text-lg text-gray-600 pb-10">
        If you don't have a wallet yet, you can select a provider and create one now.
      </h2>
      <ConnectKeplrButton/>
    </div>
  );
};

export default ConnectWallet;