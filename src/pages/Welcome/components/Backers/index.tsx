import React, { FC } from 'react';
import { ArchwayIcon, ArchwayNameIcon } from "../../../../components/Icons";


const Backers: FC = () => {
  return (
    <div className="space-y-5">
      <span className="text-5xl">Backed by the Best</span>
      <div className="flex items-center gap-4">
        <ArchwayIcon/>
        <ArchwayNameIcon width={100} height={30}/>
      </div>
    </div>
  );
};

export default Backers;