import './index.css';
import React from 'react';

import AppRoutes from "./AppRoutes";
import { KeplrWalletProvider } from "./wallet";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Buffer } from "buffer";

(window as any).buffer = Buffer

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <KeplrWalletProvider>
        <AppRoutes />
      </KeplrWalletProvider>
    </BrowserRouter>
  </React.StrictMode>
);

