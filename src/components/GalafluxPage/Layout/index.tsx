import { FC, PropsWithChildren } from 'react';
import LeftPanel from "./LeftPanel";
import Header from "./Header";

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
      <div className="flex font-kanit min-h-screen">
        <LeftPanel />
        <main className="flex-grow">
          <Header />
          {children}
        </main>
      </div>
    );
  }
;

export default Layout;