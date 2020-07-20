import React from "react";
import Login from "../login/Login";
import Dashboard from "../dashboard/Dashboard";
import About from "../about/About";

import PrivateRoute from "../../components/router/PrivateRoute";

import { Switch, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default Home;
