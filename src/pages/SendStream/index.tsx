import { FC } from 'react';
import SendStreamForm from "../../components/Forms/SendStream";

const SendStream: FC = () => {
  return (
    <div className="flex items-center justify-center">
      <SendStreamForm/>
    </div>
  );
};

export default SendStream;