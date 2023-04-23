import { FC } from 'react';

interface TimeInfoProps {
  startTimeTimestamp: number,
  endTimeTimestamp: number,
  ratePerSecond: number,
}

const TimeInfo: FC<TimeInfoProps> = ({
  startTimeTimestamp,
  endTimeTimestamp,
  ratePerSecond
}) => {

  // convert timestamps to human readable dd month yyyy hh:mm
  const startTime = new Date(startTimeTimestamp * 1_000).toLocaleString()
  const endTime = new Date(endTimeTimestamp * 1000).toLocaleString()

  // calculate remaining time in human readable format
  const remainingTime = new Date(endTimeTimestamp - startTimeTimestamp).toLocaleString()

  return (
    <div className="flex flex-col gap-2">
      <div>Start time: {startTime}</div>
      <div>End time: {startTime}</div>
      <div>Remaining time: {remainingTime}</div>
      <div>Rate per second: {ratePerSecond}</div>
    </div>
  );
};

export default TimeInfo;