import './index.css';
import React from 'react';

import AppRoutes from "./AppRoutes";
import { KeplerWalletProvider } from "./wallet";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <KeplerWalletProvider>
        <AppRoutes />
      </KeplerWalletProvider>
    </BrowserRouter>
  </React.StrictMode>
);

