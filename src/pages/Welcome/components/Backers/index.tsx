import React, { FC } from 'react';
import { Archway } from "../../../../components/Logos";


const Backers: FC = () => {
  return (
    <div className="space-y-10">
      <span className="text-6xl">Backed by the Best</span>
      <div className="flex">
        <Archway/>
      </div>
    </div>
  );
};

export default Backers;