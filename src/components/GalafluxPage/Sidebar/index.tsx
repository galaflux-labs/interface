import React, { FC } from 'react';
import BarOption from "./BarItem";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
import { RiContactsBook2Line, RiHistoryFill } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { routes } from "../../../routes/paths";

const Sidebar: FC = () => {
  return (
      <Menu>
        <div className="space-y-2">
          <BarOption
            path={routes.DASHBOARD}
            title="Dashboard"
            icon={<MdSpaceDashboard size={24} />}
          />
          <BarOption
            path={routes.SEND_STREAM}
            title="Send stream"
            icon={<HiOutlineArrowNarrowRight size={24} />}
          />
          <BarOption
            path={routes.HISTORY}
            title="History" icon={<RiHistoryFill
            size={24} />}
          />
          <BarOption
            path={routes.ADDRESS_BOOK}
            title="Address book" icon={<RiContactsBook2Line
            size={24} />}
          />
        </div>
      </Menu>
  );
}

export default Sidebar