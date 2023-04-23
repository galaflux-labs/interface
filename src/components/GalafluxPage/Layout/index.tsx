import React, { FC, PropsWithChildren } from 'react';
import Sidebar from "../Sidebar";

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
      <div className="flex font-kanit min-h-screen">
        <Sidebar />
        <main className="flex-grow pt-10">
          {children}
        </main>
      </div>
    );
  }
;

export default Layout;