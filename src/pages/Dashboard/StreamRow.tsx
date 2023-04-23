import { FC } from 'react';
import { IStream } from "../../types/stream";
import { NavLink } from "react-router-dom";
import bigDecimal from "js-big-decimal";
import { BN } from "bn.js";

const StreamRow: FC<IStream & {walletAddress: string}> = (props) => {

  const divisor = new bigDecimal(new BN(10).pow(new BN(18)).toString())

  return (
    <NavLink to={`/stream/${props.streamId}`}>
      <hr/>
      <div className="flex flex-row justify-between gap-4 px-6 py-4 hover:bg-gray-100">
        <div className="col-span-1">
          $TEST
        </div>
        <div className="col-span-2">
          {props.owner.slice(0, 5) + "..." + props.owner.slice(-5)}
        </div>
        <div className="col-span-2">
          {props.recipient.slice(0, 5) + "..." + props.recipient.slice(-5)}
        </div>
        <div className="cols-span-3">
          {new bigDecimal(props.amount.toString()).divide(divisor, 6).getPrettyValue(6, ",")}
        </div>
        <div className={props.walletAddress === props.owner ? "text-red-500" : "text-green-500"}>
          {props.walletAddress === props.owner ? "-" : "+"}
          {new bigDecimal(props.rate_per_second.toString()).divide(divisor, 6).getPrettyValue(6, ",")} / sec
        </div>
      </div>
    </NavLink>
  );
};

export default StreamRow;