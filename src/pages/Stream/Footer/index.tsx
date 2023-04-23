import { FC, useEffect, useState } from 'react';
import dayjs from "dayjs";

interface FooterProps {
  startTimeTimestamp: number,
  endTimeTimestamp: number,
  ratePerSecond: number
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
}) => {


  const [remaining, setRemaining] = useState(endTimeTimestamp * 1000 - new Date().getDate())

  const start = dayjs(startTimeTimestamp * 1000)
  const end = dayjs(endTimeTimestamp * 1000)
  const format = "D MMM. YYYY HH:mm"

  // update remaining each second
  useEffect(() => {
    setTimeout(() => {
      setRemaining(value => value - 1)
    }, 1000)
  }, [remaining])

  return (
    <div className="flex flex-col gap-2">
      <KeyValue keyName="Start time:" value={start.format(format)} />
      <KeyValue keyName="End time:" value={end.format(format)} />
      <KeyValue keyName="Rate per second:" value={(ratePerSecond / 1e18).toFixed(6) + " " + "$ARCH"} />
      <KeyValue keyName={"Network"} value={"Archway"}/>
    </div>
  );
};

export default Footer;