import React, { FC } from 'react';
import { SiHeadspace } from "react-icons/si";


interface ConnectedWalletProps {
  address: string
}
const ConnectedWallet: FC<ConnectedWalletProps> = ({address}) => {
  return (
    <button className="flex flex-row items-end gap-3 px-4">
      <SiHeadspace size={40} className="text-orange-400"/>
      <div className="flex flex-col items-start gap-[2px]">
        <span className="text-lg">{address.slice(0, 5)}...{address.slice(-5)}</span>
        <span className="text-orange-400 text-xs">Connected</span>
      </div>
    </button>
  );
};

export default ConnectedWallet;