import { FC } from 'react';

interface StreamingHeaderProps {
  amount: number
  tokenName: string
}

const StreamingHeader: FC<StreamingHeaderProps> = ({
  amount,
  tokenName
}) => {
  return (
    <div className="flex flex-col gap-4 text-6xl">
      {amount}
    </div>
  );
};

export default StreamingHeader;