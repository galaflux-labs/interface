import { FC, useState } from 'react';

const TimeTextChange: FC = () => {
    const times = ["second", "minute", "hour", "month"]

    const [index, setIndex] = useState(0);
    setTimeout(() => {
      setIndex((index + 1) % times.length);
    }, 1000);

    return <span className="text-orange-500 underline">{times[index]}.</span>
  }
;

export default TimeTextChange;