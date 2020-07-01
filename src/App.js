import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";

import Routes from "./routes";

import { AuthProvider } from "./contexts/auth";
import { ClientProvider } from "./contexts/clients";

import "./style/GlobalStyle.css";

function App() {
  return (
    <AuthProvider>
      <CssBaseline />
      <ClientProvider>
        <Routes />
      </ClientProvider>
    </AuthProvider>
  );
}

export default App;
