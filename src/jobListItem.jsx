import React from "react"
import { jobTypes } from "./careersData"

export default class JobListItem extends React.Component {

    constructor() {
        super()
        this.state = {
            type: 0,
            experienceMin: null,
            experienceMax: null
        }
    }

    componentWillMount() {
        const job = this.props.job,
            type = job.type,
            experienceMin = job.experienceMin,
            experienceMax = job.experienceMax
        this.setState({ type })
        this.setState({ experienceMin })
        this.setState({ experienceMax })
    }

    getJobType() {
        return jobTypes[this.state.type]
    }

    getExperience() {
        if (this.state.experienceMin == null && this.state.experienceMax == null)
            return ``
        else if (this.state.experienceMin == null)
            return `${this.state.experienceMax}- years`
        else if (this.state.experienceMax == null)
            return `${this.state.experienceMin}+ years`
        else
            return `${this.state.experienceMin}-${this.state.experienceMax} years`
    }

    render() {
        const job = this.props.job,
            year = job.createdAt.slice(0, 4),
            month = job.createdAt.slice(4, 6),
            day = job.createdAt.slice(6, 8),
            createdAt = `${year}-${month}-${day}`
        return (
            <tr onClick={this.props.onClick}>
                <td>{job.title.toUpperCase()}</td>
                <td>{createdAt}</td>
                <td>{this.getJobType()}</td>
                <td>{job.city}</td>
                <td>{this.getExperience()}</td>
            </tr>
        )
    }

}
