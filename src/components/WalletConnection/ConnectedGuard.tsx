import { FC, PropsWithChildren } from 'react';
import { useKeplerWallet } from "../../wallet";

const ConnectedGuard: FC<PropsWithChildren> = ({children}) => {
  const wallet = useKeplerWallet()

  return (
    <div>
      ConnectedGuard
    </div>
  );
};

export default ConnectedGuard;