import { FC } from 'react';
import SendStreamForm from "../../components/Forms/SendStream";

const SendStream: FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <SendStreamForm />
    </div>
  )
};

export default SendStream;