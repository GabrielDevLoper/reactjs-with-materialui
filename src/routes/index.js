import React, { useContext } from "react";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import AuthContext from "../contexts/auth";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));

function Routes() {
  const { signed, loading } = useContext(AuthContext);

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
