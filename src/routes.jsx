import React from "react"
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import Layout from './layout'
import Home from "./home"
import JobAdList from "./jobAdList"
import ContactForm from "./contactForm"
import Page404 from './404'

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Layout exact path="/" component={Home} />
                    <Layout path="/contact" component={ContactForm} />
                    <Layout path="/jobs" component={JobAdList} />
                    <Layout path="/404" component={Page404} />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        )
    }
}
