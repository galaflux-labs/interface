import { FC } from 'react';
import StreamLink from "./StreamLink";
import Flow from "../../components/Animation/Flow";

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
    <div className="flex flex-col gap-4">
      <Flow/>
      {tokens.map((token) => (<StreamLink {...token} />))}
    </div>
  );
};


export default Dashboard;