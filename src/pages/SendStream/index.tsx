import { FC } from 'react';
import SendStreamForm from "../../components/Forms/SendStream";
import { useKeplrWallet } from "../../wallet";
import ConnectWallet from "../ConnectWallet";

const SendStream: FC = () => {

  const {state} = useKeplrWallet()

  return (
    <div className="flex items-center justify-center h-full">
      {state
        ? <SendStreamForm {...state} />
        : <ConnectWallet/>
      }
    </div>
  )
};

export default SendStream;