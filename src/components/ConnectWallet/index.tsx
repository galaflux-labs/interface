import { FC } from 'react';
import { BaseButton } from "../Buttons";

interface ConnectWalletProps {
  connectKeplr: () => Promise<void>
}

const ConnectWallet: FC<ConnectWalletProps> = ({connectKeplr}) => {
  return (
    <BaseButton text="Connect wallet" onClick={connectKeplr} />
  );
};

export default ConnectWallet;