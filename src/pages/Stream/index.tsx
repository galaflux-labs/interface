import React, { FC, useCallback, useEffect, useState } from 'react';
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
import { IStream } from "../../types/stream";
import CustomAlert from "../../components/Animation/Alert";
import { KeplerWalletState } from "../../wallet/wallet";

const Stream: FC<IStream> = (props) => {

  const {state} = useKeplrWallet()

  const [claimedAmount, setClaimedAmount] = useState(props.claimed_amount.toString())

  const [showAlert, setShowAlert] = useState(false)
  const [isAlertError, setIsAlertError] = useState(true)
  const [alertMsg, setAlertMsg] = useState("Error")

  const alert = useCallback((msg: string, isErr: boolean) => {
    setIsAlertError(isErr)
    setAlertMsg(msg)
    setShowAlert(true)
    setTimeout(function () {
      setShowAlert(false)
    }, 3000)
  }, [setIsAlertError, setAlertMsg, setShowAlert])

  const claim = useCallback(async (state: KeplerWalletState) => {
    withdraw({
        walletAddress: state.walletAddress,
        streamId: props.streamId,
        signingClient: state.signingClient,
        gasPrice: state.gasPrice
      }
    ).then(() => {
        alert("Claimed successfully", false)
        getStream(props.streamId).then(newStr => {
          setClaimedAmount(newStr.claimed_amount)
        })
      }
    ).catch((e) => {
      console.log(e)
      alert("Claiming failed", true)
    })
  }, [alert, props])

  return (
    <div className="flex items-center justify-center h-full">
      {showAlert ? (
        <div className="absolute top-10 right-10">
          <CustomAlert msg={alertMsg} isError={isAlertError} />
        </div>
      ) : (
        <></>
      )}
      <Flow />
      <div className="min-w-[600px] space-y-12">
        <StreamingHeader amount={props.amount}
                         tokenName={"$TEST"}
        />
        <ClaimableInfo amount={props.amount}
                       tokenName={"$TEST"}
                       claimed={claimedAmount}
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
        {state && state.walletAddress === props.recipient &&
          <div>
            <BaseButton text="Claim tokens"
                        onClick={() => claim(state)}
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