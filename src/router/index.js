import React from 'react'
// import { Router, Route } from 'react-router'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { hashHistory/* , Redirect */ } from 'react-router'
import Notfound from "../components/404";
import Login from "../components/login";
import App from "../components/app";

export default () => (
  <Router>
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <App path="/" exact />
      <Route path="*">
        <Notfound />
      </Route>
    </Switch>
  </Router>
)