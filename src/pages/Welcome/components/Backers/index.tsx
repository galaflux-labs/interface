import React, { FC } from 'react';
import { ArchwayIcon } from "../../../../components/Icons";


const Backers: FC = () => {
  return (
    <div className="space-y-10">
      <span className="text-6xl">Backed by the Best</span>
      <div className="flex">
        <ArchwayIcon/>
      </div>
    </div>
  );
};

export default Backers;