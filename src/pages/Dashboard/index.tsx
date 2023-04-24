import React, { FC, useEffect, useState } from 'react';
import { getIds, getStream } from "../../api/get";
import { IStream } from "../../types/stream";
import { useKeplrWallet } from "../../wallet";
import ConnectWallet from "../ConnectWallet";
import StreamRow from "./StreamRow";

const StreamsList: FC<{ streams: IStream[], walletAddress: string }> = ({streams, walletAddress}) => {
  return (
    <div className="flex flex-col gap-4 px-20">
      <div className="text-4xl text-gray-600">Streams</div>
      <div className="ring-[1px] ring-gray-300 rounded-xl space-y-5 overflow-hidden">
        <div className="flex flex-col px-6 py-4">
          <div className="flex flex-row justify-between text-sm text-gray-600">
            <div>Token</div>
            <div>Sender</div>
            <div>Receiver</div>
            <div>Total</div>
            <div>Flow per second</div>
          </div>
          {streams.map((stream) => (
            <StreamRow key={stream.streamId} walletAddress={walletAddress} {...stream} />
          ))}
        </div>
      </div>
    </div>
  );
};


const StreamsFetcher: FC<{ walletAddress: string }> = ({walletAddress}) => {
  const [ids, setIds] = useState<number[]>([])
  const [streams, setStreams] = useState<IStream[]>([])

  useEffect(() => {
    getIds(walletAddress).then(setIds)
  }, [])

  useEffect(() => {
    Promise
    .all(ids.map(id => getStream(id)))
    .then(setStreams)
  }, [ids])

  return <StreamsList streams={streams} walletAddress={walletAddress} />
};

const Dashboard: FC = () => {
  const {state} = useKeplrWallet()

  return (
    <>
      {state
        ? <StreamsFetcher walletAddress={state.walletAddress} />
        : <div className="flex h-full items-center justify-center"><ConnectWallet /></div>
      }
    </>
  )
}

export default Dashboard;