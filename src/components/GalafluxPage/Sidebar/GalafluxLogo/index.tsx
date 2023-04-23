import React, { FC } from 'react';
import { NavLink } from "react-router-dom";
import { SiSquarespace } from "react-icons/si";

const GalafluxLogo: FC = () => {
  return (
    <NavLink to="/" className="font-medium text-4xl flex items-center justify-center gap-2">
      <SiSquarespace size={40}/>
      Galaflux
    </NavLink>
  );
};

export default GalafluxLogo;