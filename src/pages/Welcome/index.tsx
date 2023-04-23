import React, { FC } from 'react';
import Description from "./components/Description";
import Backers from "./components/Supporters";
import Flow from "../../components/Animation/Flow";
import { BaseButton } from "../../components/Buttons";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/paths";

const Welcome: FC = () => {

  const navigation = useNavigate()

  return (
    <>
      <Flow />
      <div className="min-h-screen flex flex-col justify-between items-center p-12">
        <div className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-orange-600">
          Galaflux
        </div>
        <div className="rounded-lg space-y-5">
          <Description />
          <BaseButton text="Launch app" onClick={() => navigation(routes.DASHBOARD)} />
        </div>
        <Backers />
      </div>
    </>
  );
};

export default Welcome;