import { FC } from 'react';
import { Keplr } from "../../components/Icons/Wallets";
import { useKeplrWallet } from "../../wallet";

const ConnectKeplrButton: FC = () => {
  const wallet = useKeplrWallet()
  return (
    <button className="active:scale-95 transition-all bg-gradient-to-r from-purple-400 to-blue-600 flex gap-4 rounded-xl px-4 py-3 items-center"
            onClick={wallet.connect}
    >
      <Keplr size={24} />
      <div className="text-white">Connect wallet</div>
    </button>
  );
};

export default ConnectKeplrButton;