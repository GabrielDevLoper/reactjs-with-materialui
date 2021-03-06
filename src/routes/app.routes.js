import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";
import Clients from "../pages/Clients";
import Category from "../pages/Category";
import EditClient from "../pages/Clients/EditClient";
import AddClient from "../pages/Clients/AddClient";
import Products from "../pages/Products";
import Users from "../pages/Users";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/clients" component={Clients} />
        <Route path="/edit-client/:client" component={EditClient} />
        <Route path="/add-client" component={AddClient} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
        <Route path="/users" component={Users} />
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
