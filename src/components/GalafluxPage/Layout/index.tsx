import React, { FC, PropsWithChildren } from 'react';
import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
      <div className="flex font-kanit min-h-screen">
        <Sidebar />
        <main className="flex-grow">
          <Header />
          {children}
        </main>
      </div>
    );
  }
;

export default Layout;