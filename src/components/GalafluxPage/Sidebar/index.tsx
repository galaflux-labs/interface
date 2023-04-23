import { FC } from 'react';
import ConnectWallet from "../../ConnectWallet";
import { useKeplerWallet } from "../../../wallet";
import MenuOptions from "./Menu";
import GalafluxLogo from "./GalafluxLogo";

const Sidebar: FC = () => {

  const wallet = useKeplerWallet()

  return (
    <div className="w-60 block border-r-[1px] px-4 grow-0 shrink-0 basis-auto">
      <div className="flex flex-col h-full space-y-8">
        <GalafluxLogo/>
        {<ConnectWallet connectKeplr={wallet.connect} />}
        <MenuOptions />
      </div>
    </div>
  );
};

export default Sidebar;