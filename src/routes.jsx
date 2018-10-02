import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./app"
import ContactForm from "./contactForm"

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={App} exact />
                    <Route path="/contact" component={ContactForm} />
                </Switch>
            </Router>
        )
    }
}
