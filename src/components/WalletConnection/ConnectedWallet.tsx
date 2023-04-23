import React, { FC } from 'react';
import { KeplrIcon } from "../Icons";


interface ConnectedWalletProps {
  address: string
}
const ConnectedWallet: FC<ConnectedWalletProps> = ({address}) => {
  return (
    <button className="flex flex-row items-end gap-3 px-4">
      <KeplrIcon size={40} />
      <div className="flex flex-col items-start gap-[2px]">
        <span className="text-lg">
          {address.slice(0, 5)}...{address.slice(-5)}
        </span>
        <span className="text-xs text-blue-500">
          Connected
        </span>
      </div>
    </button>
  );
};

export default ConnectedWallet;