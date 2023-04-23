import React, { FC, useEffect, useState } from 'react';

interface ClaimableInfoProps {
  amount: number
  tokenName: string
  claimed: number
  flowRate: number
}

const ClaimableInfo: FC<ClaimableInfoProps> = (props) => {

  const [claimable, setClaimable] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setClaimable(value => value + props.flowRate)
    }, 1000)
  })

  return (
    <div className="flex flex-row justify-between">
      {/*<div className="space-y-3">*/}
      {/*  <span className="text-gray-600">*/}
      {/*    Claimable {props.tokenName}*/}
      {/*  </span>*/}
      {/*  <div className="text-2xl">*/}
      {/*    {(claimable / 1e18).toFixed(6)}*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="space-y-3">
        <span className="text-gray-600">
          Claimed {props.tokenName}
        </span>
        <div className="text-2xl">
          {(props.claimed / 1e18).toFixed(6)}
        </div>
      </div>
    </div>
  );
};

export default ClaimableInfo;