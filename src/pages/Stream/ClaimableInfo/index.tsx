import React, { FC, useEffect, useState } from 'react';

interface ClaimableInfoProps {
  amount: number
  tokenName: string
  claimed: number
  flowRate: number
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

const ClaimableInfo: FC<ClaimableInfoProps> = (props) => {

  const [claimable, setClaimable] = useState(props.amount - props.claimed)

  useEffect(() => {
    setTimeout(() => {
      setClaimable(claimable + props.flowRate)
    }, 1000)
  })

  return (
    <div className="flex flex-row justify-between">
      <div className="space-y-3">
        <span className="text-gray-600">
          Claimable {props.tokenName}
        </span>
        <div className="text-2xl">
          {claimable}
        </div>
      </div>
      <div className="space-y-3">
        <span className="text-gray-600">
          Claimed {props.tokenName}
        </span>
        <div className="text-2xl">
          {props.claimed}
        </div>
      </div>
    </div>
  );
};

export default ClaimableInfo;