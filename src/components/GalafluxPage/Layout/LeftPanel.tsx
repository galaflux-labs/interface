import { FC } from 'react';
import Sidebar from "../Sidebar";
import ConnectWallet from "../../ConnectWallet";
import { useKeplerWallet } from "../../../wallet";

const LeftPanel: FC = () => {

  const wallet = useKeplerWallet()

  return (
    <div className="w-60 block border-r-[1px] px-4 grow-0 shrink-0 basis-auto">
      <div className="flex flex-col h-full space-y-6">
        {wallet.state ? <div>{wallet.state.address}</div> : <ConnectWallet connectKeplr={wallet.connect}/>}
        <Sidebar />
      </div>
    </div>
  );
};

export default LeftPanel;