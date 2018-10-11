import React from "react"
import { jobTypes } from "./careersData"

import style from "./app.css"

export default class JobItem extends React.Component {

    componentWillMount() {
        const type = this.props.job.type
        this.setState({ type })
    }

    render() {
        const job = this.props.job,
            year = (job.createdAt || "").slice(0, 4),
            month = (job.createdAt || "").slice(4, 6),
            day = (job.createdAt || "").slice(6, 8),
            createdAt = `${year}-${month}-${day}`
        return (
            <div className={`${style.middle} ${style.jobAddDetail}`}>
                <h3 className={style.arrow}>{job.title}</h3>
                <p>Created at {createdAt}</p>
                <p>{jobTypes[job.type]}</p>
                <p>Description: {job.description}</p>
            </div>
        )
    }

}
