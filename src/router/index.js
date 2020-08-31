import React from 'react'
// import { Router, Route } from 'react-router'
// import { hashHistory/* , Redirect */ } from 'react-router'
import { Router, Route, IndexRoute, hashHistory/* , Redirect */ } from 'react-router'
import Notfound from "../components/404"
import Login from "../components/login"
import App from "../components/app"
import Dashbord from '../pages/dashbord'
import Form from '../pages/form'
export default () => (
  <Router history={hashHistory}>
      <Route path="/" component={App}>
      <IndexRoute component={Dashbord} />
      <Route path="/form" component={Form} />
    </Route>
    <Route path="/login" component={Login} />
    <Route path="*" component={Notfound} />
  </Router>
)