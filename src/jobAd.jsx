import React from "react"

import style from "./app.css"

export default class JobAd extends React.Component {
    constructor() {
        super()
        this.state = {
            jobTypes: ["Part-time", "Full-time"],
            jobType: 0
        }
        this.changeJobType = this.changeJobType.bind(this)
    }

    componentWillMount() {
        const jobType = this.props.jobType
        this.setState({ jobType })
    }

    getJobType() {
        return this.state.jobTypes[this.state.jobType]
    }

    changeJobType() {
        const jobType = (this.state.jobType + 1) % this.state.jobTypes.length
        this.setState({ jobType })
    }

    render() {
        const year = this.props.createdAt.slice(0, 4)
        const month = this.props.createdAt.slice(4, 6)
        const day = this.props.createdAt.slice(6, 8)
        const createdAt = `${year}-${month}-${day}`
        return (
            <div className={`${style.middle} ${style.jobAddDetail}`}>
                <h3 className={style.arrow}>{this.props.title}</h3>
                <p>Created at {createdAt}</p>
                <p>{this.getJobType()}</p>
                <button onClick={this.changeJobType} >Change contract type </button>
                <p>Description: {this.props.description}</p>
            </div>
        )
    }
}
