import React from "react";
import Login from "../login/Login";
import Dashboard from "../dashboard/Dashboard";
import About from "../about/About";

import PrivateRoute from "../../components/router/PrivateRoute";

import { Switch, Route } from "react-router-dom";
import Payments from "../payments/Payments";
import PaymentsV2 from "../paymentsV2/PaymentsV2";
import Invoices from "../payments/invoices/Invoices";

function Home() {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/payments">
          <Payments />
        </PrivateRoute>
        <PrivateRoute path="/subscriptons">
          <PaymentsV2 />
        </PrivateRoute>
        <PrivateRoute path="/invoices">
          <Invoices />
        </PrivateRoute>
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
