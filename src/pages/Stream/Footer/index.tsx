import { FC, useEffect, useState } from 'react';
import dayjs from "dayjs";
import bigDecimal from "js-big-decimal";
import { BN } from "bn.js";

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

  const divisor = new bigDecimal(new BN(10).pow(new BN(18)).toString())
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
      <KeyValue keyName="Rate per second:"
                value={new bigDecimal(ratePerSecond).divide(divisor, 6).getPrettyValue(6, ",") + " " + "$TEST"} />
      <KeyValue keyName={"Network"} value={"Archway"} />
    </div>
  );
};

export default Footer;