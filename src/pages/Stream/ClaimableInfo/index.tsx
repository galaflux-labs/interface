import React, { FC, useEffect, useState } from 'react';
import { BN } from "bn.js";
import bigDecimal from "js-big-decimal";

interface ClaimableInfoProps {
  startDateTimestamp: number
  endDateTimestamp: number
  amount: number
  tokenName: string
  claimed: number
  flowRate: number
}

const ClaimableInfo: FC<ClaimableInfoProps> = (props) => {

  const divisor = new bigDecimal(new BN(10).pow(new BN(18)).toString())
  const precision = 6

  const [claimable, setClaimable] = useState(
    new BN(new Date().getTime() / 1000 - props.startDateTimestamp)
    .mul(new BN(props.flowRate))
    .sub(new BN(props.claimed))
  )

  useEffect(() => {
    if (props.startDateTimestamp * 1000 > new Date().getTime()) {
      setClaimable(new BN(0))
    }
    setTimeout(() => {
      setClaimable(value => value.add(new BN(props.flowRate)))
    }, 1000)
  })

  return (
    <div className="flex flex-row justify-between">
      <div className="space-y-3">
        <span className="text-gray-600">
          Claimable {props.tokenName}
        </span>
        <div className="text-2xl">
          {new bigDecimal(claimable.toString()).divide(divisor, precision).getPrettyValue(precision, ",")}
        </div>
      </div>
      <div className="space-y-3">
        <span className="text-gray-600">
          Claimed {props.tokenName}
        </span>
        <div className="text-2xl">
          {new bigDecimal(props.claimed.toString()).divide(divisor, precision).getPrettyValue(precision, ",")}
        </div>
      </div>
    </div>
  );
};

export default ClaimableInfo;