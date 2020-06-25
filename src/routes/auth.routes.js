import { BrowserRouter, Route } from "react-router-dom";

import React from "react";

import Login from "../pages/Login";
import Home from "../pages/Home";

function AuthRoutes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default AuthRoutes;
