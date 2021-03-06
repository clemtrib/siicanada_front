import React from "react"
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom"
import Layout from "./layout"
import Home from "./home"
import Careers from "./careers"
import Contact from "./contact"
import Login from "./login"
import Page404 from "./404"
import { Provider } from "./context"
import { ads } from "./careersData"

export default class Routes extends React.Component {

    constructor() {
        super()
        this.state = {
            jobsList: [],
            jobSelected: 0,
            loadJobsList: this.loadJobsList.bind(this),
            setJobSelected: this.setJobSelected.bind(this)
        }
    }

    loadJobsList() {
        this.setState({
            jobsList: ads
        })
    }

    setJobSelected(id) {
        this.setState({
            jobSelected: id
        })
    }

    render() {
        return (
            <Provider value={this.state}>
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
            </Provider>
        )
    }
}
