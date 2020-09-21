import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/_globalStyle.scss";
import LoginPage from "./container/AuthPage/LoginPage";
import Dashboard from "./container/Dashboard/Dashboard";
import ErrorPage from "./container/ErrorPage/ErrorPage";
import ProtectedRoute from "./container/ProtectedRoute";
import Service from "./container/Service/Service";
import axios from "axios";

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        {/* <ProtectedRoute exact path="/dashboard" component={Dashboard} /> */}
        <Route exact path="/dashboard" component={Dashboard} />

        <ProtectedRoute exact path="/service" component={Service} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
