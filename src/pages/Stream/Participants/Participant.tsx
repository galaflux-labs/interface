import React, { FC } from 'react';
import { KeplrIcon } from "../../../components/Icons";

interface ParticipantProps {
  address: string
  isSender: boolean
}

const Participant: FC<ParticipantProps> = ({address, isSender}) => {
  return (
    <div className="space-y-4">
      <span className="text-gray-600">
      {isSender ? "Sender" : "Recipient"}
      </span>
      <div className="m-5">
        <div className="flex flex-row gap-2 items-center rounded-l">
          <KeplrIcon size={20} />
          <div className="flex flex-col items-start gap-[2px]">
        <span className="text-lg">
          {address.slice(0, 10)}...{address.slice(-5)}
        </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participant;