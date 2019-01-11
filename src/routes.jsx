import React from "react"
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom"
import Layout from "./layout"
import Home from "./home"
import Careers from "./careers"
import Contact from "./contact"
import Login from "./login"
import Page404 from "./404"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Layout exact path="/" component={Home} />
        <Layout path="/contact" component={Contact} />
        <Layout path="/jobs" component={Careers} />
        <Layout path="/myspace" component={Login} />
        <Layout path="/404" component={Page404} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  )
}

export default Routes
