import { FC } from 'react';

interface StreamingHeaderProps {
  amount: number
  tokenName: string
}

const StreamingHeader: FC<StreamingHeaderProps> = ({
  amount,
  tokenName,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-gray-600 text-xl">Total Amount Streamed</div>
      <div className="text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black to-orange-600">
        {amount} {tokenName}
      </div>
      <div className="text-2xl">
        $ 0.0
      </div>
    </div>
  );
};

export default StreamingHeader;