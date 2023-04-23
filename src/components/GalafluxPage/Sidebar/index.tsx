import { FC } from 'react';
import {ConnectedWallet} from "../../WalletConnection";
import { useKeplerWallet } from "../../../wallet";
import MenuOptions from "./Menu";
import GalafluxLogo from "./GalafluxHeader";
import { BaseButton } from "../../Buttons";

const Sidebar: FC = () => {

  const wallet = useKeplerWallet()

  return (
    <div className="w-60 block border-r-[1px] px-4 grow-0 shrink-0 basis-auto">
      <div className="flex flex-col h-full space-y-14 pt-10">
        <GalafluxLogo />
        {
          wallet.state
            ? <ConnectedWallet address={wallet.state.walletAddress}/>
            : <BaseButton text="Connect wallet" onClick={wallet.connect} />
        }
        <MenuOptions />
      </div>
    </div>
  );
};

export default Sidebar;