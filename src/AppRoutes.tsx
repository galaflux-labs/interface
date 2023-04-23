import React, { FC } from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from "./components/GalafluxPage/Layout";
import { routes } from "./routes/paths";
import Welcome from "./pages/Welcome";
import SendStream from "./pages/SendStream";
import AddressBook from "./pages/AddressBook";
import ActivityHistory from "./pages/ActivityHistory";
import Dashboard from "./pages/Dashboard";
import StreamFetcher from "./pages/Stream";

const AppRoutes: FC = () => {

  return (
    <Routes>
      <Route path={routes.WELCOME} element={<Welcome />} />
      <Route path={routes.DASHBOARD} element={<Layout>< Dashboard /></Layout>} />
      <Route path={routes.SEND_STREAM} element={<Layout>< SendStream /></Layout>} />
      <Route path={routes.ADDRESS_BOOK} element={<Layout>< AddressBook /></Layout>} />
      <Route path={routes.HISTORY} element={<Layout>< ActivityHistory /></Layout>} />
      <Route path={routes.STREAM} element={<Layout>< StreamFetcher /></Layout>} />
    </Routes>
  );
};

export default AppRoutes;