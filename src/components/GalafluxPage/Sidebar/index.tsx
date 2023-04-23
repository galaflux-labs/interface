import { FC } from 'react';
import { ConnectedWallet } from "../../WalletConnection";
import { useKeplrWallet } from "../../../wallet";
import MenuOptions from "./Menu";
import GalafluxLogo from "./GalafluxHeader";
import ConnectKeplrButton from "../../../pages/ConnectWallet/ConnectKeplrButton";

const Sidebar: FC = () => {

  const wallet = useKeplrWallet()

  return (
    <div className="w-60 block border-r-[1px] px-4 grow-0 shrink-0 basis-auto">
      <div className="flex flex-col h-full space-y-14 pt-10">
        <GalafluxLogo />
        {
          wallet.state
            ? <ConnectedWallet address={wallet.state.walletAddress} />
            : < ConnectKeplrButton />
        }
        <MenuOptions />
      </div>
    </div>
  );
};

export default Sidebar;