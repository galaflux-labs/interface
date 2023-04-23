import { FC, useEffect, useState } from 'react';
import StreamLink from "./StreamLink";
import { ArchwayNameIcon } from "../../components/Icons";
import { useKeplrWallet } from "../../wallet";
import { getIds } from "../../api/get";

const Dashboard: FC = () => {

  const tokens = [
    {
      id: "1",
      tokenName: "Test stream"
    },
    {
      id: "2",
      tokenName: "Test stream 2"
    },
    {
      id: "3",
      tokenName: "Test stream 3"
    }
  ]

  return (
    <div className="flex flex-col gap-4 px-20">
      <div className="text-4xl text-gray-600">Streams</div>
      <div className="ring-[1px] ring-gray-300 px-6 py-5 rounded-xl space-y-5">
        <ArchwayNameIcon width={100} height={40} />
        <hr/>
        <div className="flex flex-col gap-4">
          {tokens.map((token) => (
            <div>
              <StreamLink {...token} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const StreamsFetcher: FC = () => {
  const wallet = useKeplrWallet()
  const [ids, setIds] = useState<number[]>([])

  useEffect(() => {
    getIds("archway18arcrs9ntn3jspld3ah4kgu6shpn807u3nf72h").then(setIds)
  }, [])

  return <Dashboard />
};

export default StreamsFetcher;