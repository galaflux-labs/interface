import React, { FC, useEffect, useState } from 'react';
import StreamingHeader from "./Header";
import Participants from "./Participants";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import ClaimableInfo from "./ClaimableInfo";
import Flow from "../../components/Animation/Flow";
import { getStream } from "../../api/get";
import { useKeplrWallet } from "../../wallet";
import { BaseButton } from "../../components/Buttons";
import { withdraw } from "../../api/set";

interface StreamProps {
  streamId: number
  owner: string,
  recipient: string,
  amount: number,
  claimed_amount: number,
  start_time: number,
  end_time: number,
  rate_per_second: number,
}

const Stream: FC<StreamProps> = (props) => {

  const {state} = useKeplrWallet()

  return (
    <div className="flex items-center justify-center h-full">
      <Flow />
      <div className="min-w-[600px] space-y-12">
        <StreamingHeader amount={props.amount}
                         tokenName={"$TEST"}
        />
        <ClaimableInfo amount={props.amount}
                       tokenName={"$TEST"}
                       claimed={props.claimed_amount}
                       flowRate={props.rate_per_second}
                       endDateTimestamp={props.end_time}
                       startDateTimestamp={props.start_time}
        />
        <Participants sender={props.owner}
                      recipient={props.recipient}
        />
        <Footer startTimeTimestamp={props.start_time}
                endTimeTimestamp={props.end_time}
                ratePerSecond={props.rate_per_second}
        />
        {state && state.walletAddress == props.recipient &&
          <div>
            <BaseButton text="Claim tokens"
                        onClick={() =>
                          withdraw({
                            walletAddress: state.walletAddress,
                            streamId: props.streamId,
                            signingClient: state.signingClient,
                            gasPrice: state.gasPrice
                          })}
            />
          </div>
        }
      </div>
    </div>
  );
};


type StreamRouterParams = {
  id: string
}
const StreamFetcher: FC = () => {
  const {id} = useParams<StreamRouterParams>()

  const [stream, setStream] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (id) {
      getStream(Number(id)).then(setStream).finally(() => setLoading(false))
    }
  }, [id])

  if (!id) {
    return <div>Invalid stream id</div>
  }

  if (loading) {
    return <div>loading..</div>
  }

  return <Stream owner={stream.owner}
                 streamId={Number(id)}
                 recipient={stream.recipient}
                 amount={stream.amount}
                 claimed_amount={stream.claimed_amount}
                 start_time={stream.start_time}
                 end_time={stream.end_time}
                 rate_per_second={stream.rate_per_second}
  />
}

export default StreamFetcher;