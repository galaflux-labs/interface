import { FC } from 'react';

interface FooterProps {
  startTimeTimestamp: number,
  endTimeTimestamp: number,
  ratePerSecond: number,
  txHash: string
}

interface KeyValueProps {
  keyName: string,
  value: string
}

const KeyValue: FC<KeyValueProps> = ({keyName, value}) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="text-gray-600">
        {keyName}
      </div>
      <div>
        {value}
      </div>
    </div>
  );
};


const Footer: FC<FooterProps> = ({
  startTimeTimestamp,
  endTimeTimestamp,
  ratePerSecond,
  txHash
}) => {

  // convert timestamps to human readable dd month yyyy hh:mm
  const startTime = new Date(startTimeTimestamp * 1_000).toLocaleString()
  const endTime = new Date(endTimeTimestamp * 1000).toLocaleString()

  // calculate remaining time in human readable format
  const remainingTime = new Date(endTimeTimestamp - startTimeTimestamp).toLocaleString()

  return (
    <div className="flex flex-col gap-2">
      <KeyValue keyName="Start time:" value={startTime} />
      <KeyValue keyName="End time:" value={endTime} />
      <KeyValue keyName="Rate per second:" value={ratePerSecond.toString()} />
      <KeyValue keyName="Tx hash:" value={txHash}/>
    </div>
  );
};

export default Footer;