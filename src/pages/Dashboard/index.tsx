import { FC } from 'react';
import StreamLink from "./StreamLink";
import { ArchwayNameIcon } from "../../components/Icons";

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


export default Dashboard;