import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";
import Clients from "../pages/Clients";
import Category from "../pages/Category";
import Products from "../pages/Products";
import Users from "../pages/Users";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/home" component={Home} />
        <Route path="/clients" component={Clients} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
        <Route path="/users" component={Users} />
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
