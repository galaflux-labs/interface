import React, { FC } from 'react';
import Header from "./components/Header";
import Description from "./components/Description";
import Backers from "./components/Backers";

const Welcome: FC = () => {

  return (
    <div className="flex flex-col justify-between items-center h-screen font-kanit py-12 mx-48">
      <div className="space-y-8 w-full">
        <Header />
        <Description />
      </div>
      <Backers />
    </div>
  );
};

export default Welcome;