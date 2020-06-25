import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./routes";

import { AuthProvider } from "./contexts/auth";
import ModalProvider from "./contexts/modal";

import "./style/GlobalStyle.css";

function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <CssBaseline />
        <Routes />
      </ModalProvider>
    </AuthProvider>
  );
}

export default App;
