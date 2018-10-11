import React from "react"
import {jobTypes} from "./careersData"

import style from "./app.css"

export default class JobAd extends React.Component {
    componentWillMount() {
        const jobType = this.props.jobType
        this.setState({ jobType })
    }

    render() {
        const year = (this.props.createdAt || "").slice(0, 4)
        const month = (this.props.createdAt || "").slice(4, 6)
        const day = (this.props.createdAt || "").slice(6, 8)
        const createdAt = `${year}-${month}-${day}`
        return (
            <div className={`${style.middle} ${style.jobAddDetail}`}>
                <h3 className={style.arrow}>{this.props.title}</h3>
                <p>Created at {createdAt}</p>
                <p>{jobTypes[this.props.jobType]}</p>
                <p>Description: {this.props.description}</p>
            </div>
        )
    }
}
