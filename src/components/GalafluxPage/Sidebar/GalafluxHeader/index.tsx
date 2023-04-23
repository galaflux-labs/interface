import React, { FC } from 'react';
import { NavLink } from "react-router-dom";
import { SiSquarespace } from "react-icons/si";

const GalafluxLogo: FC = () => {
  return (
    <NavLink to="/" className="font-medium text-4xl flex items-center justify-center gap-2">
      <SiSquarespace size={40}/>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-orange-400">
        Galaflux
      </span>
    </NavLink>
  );
};

export default GalafluxLogo;