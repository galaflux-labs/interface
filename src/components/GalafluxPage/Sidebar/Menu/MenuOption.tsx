import { FC, ReactElement } from 'react';
import { Menu } from "@headlessui/react";
import { NavLink } from "react-router-dom";

interface Props {
  path: string,
  title: string,
  icon: ReactElement
}

const BarOption: FC<Props> = ({
  path,
  title,
  icon
}) => {
  return (
    <Menu.Item>
      <NavLink to={path}
               className={(state) => (
                 "flex flex-row gap-4 px-4 py-3 rounded-lg " +
                 (state.isActive ? "bg-orange-100 text-orange-400 hover:text-orange-500" : "hover:bg-gray-50 text-gray-600")
               )}
      >
        {icon}
        {title}
      </NavLink>
    </Menu.Item>
  );
};

export default BarOption;