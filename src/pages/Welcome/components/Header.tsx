import { FC } from 'react';
import TimeTextChange from "./TimeTextChange";

const Header: FC = () => {
  return (
    <div className="font-bold text-5xl">
      Send money
      <br />
      every <TimeTextChange />
    </div>
  );
};

export default Header;