import React, { FC } from 'react';
import StreamingHeader from "./Header";
import Participants from "./Participants";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import ClaimableInfo from "./ClaimableInfo";
import Flow from "../../components/Animation/Flow";

interface StreamProps {
  owner: string,
  recipient: string,
  amount: number,
  claimed_amount: number,
  start_time: number,
  end_time: number,
  rate_per_second: number,
}

const Stream: FC<StreamProps> = (props) => {

  return (
    <div className="flex items-center justify-center h-full">
      <Flow/>
      <div className="min-w-[600px] space-y-12">
        <StreamingHeader amount={props.amount}
                         tokenName={"$ARCH"}
        />
        <ClaimableInfo amount={props.amount}
                       tokenName={"$ARCH"}
                       claimed={props.claimed_amount}
                       flowRate={props.rate_per_second}
        />
        <Participants sender={props.owner}
                      recipient={props.recipient}
        />
        <Footer startTimeTimestamp={props.start_time}
                endTimeTimestamp={props.end_time}
                ratePerSecond={props.rate_per_second}
        />
      </div>
    </div>
  );
};


type StreamRouterParams = {
  id: string
}
const StreamFetcher: FC = () => {
  const {id} = useParams<StreamRouterParams>()

  console.log(id)

  if (!id) {
    return <div>Invalid stream id</div>
  }

  // fetch stream here
  const stream = {
    owner: "danielto.arch",
    recipient: "turk.arch",
    amount: 10,
    claimed_amount: 100,
    start_time: 1682257782,
    end_time: 1698068982,
    rate_per_second: 0.5,
  }

  return <Stream owner={stream.owner}
                 recipient={stream.recipient}
                 amount={stream.amount}
                 claimed_amount={stream.claimed_amount}
                 start_time={stream.start_time}
                 end_time={stream.end_time}
                 rate_per_second={stream.rate_per_second}
  />
}

export default StreamFetcher;