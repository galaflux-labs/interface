import { FC } from 'react';
import TimeTextChange from "./TimeTextChange";

const Header: FC = () => {
  return (
    <div className="font-bold text-8xl w-full">
      Send money
      <br />
      every <TimeTextChange />
    </div>
  );
};

export default Header;