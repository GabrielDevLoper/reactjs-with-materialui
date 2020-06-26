import { BrowserRouter, Route } from "react-router-dom";

import React from "react";

import Login from "../pages/Login";

function AuthRoutes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
    </BrowserRouter>
  );
}

export default AuthRoutes;
