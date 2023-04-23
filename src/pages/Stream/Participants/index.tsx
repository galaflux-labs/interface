import React, { FC } from 'react';
import Participant from "./Participant";

interface ParticipantsProps {
  sender: string,
  recipient: string,
}

const Participants: FC<ParticipantsProps> = ({
  sender,
  recipient,
}) => {
  return (
    <div className="flex flex-row justify-between w-full items-end">
      <Participant address={sender} isSender={true} />
      <Participant address={recipient} isSender={false} />
    </div>
  );
};

export default Participants;