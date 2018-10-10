import React from "react"

export default class JobAdListItem extends React.Component {
    constructor() {
        super()
        this.state = {
            jobTypes: ["Part-time", "Full-time"],
            jobType: 0,
            experienceMin: null,
            experienceMax: null
        }
    }

    componentWillMount() {
        const jobType = this.props.jobtype
        const experienceMin = this.props.experienceMin
        const experienceMax = this.props.experienceMax
        this.setState({ jobType })
        this.setState({ experienceMin })
        this.setState({ experienceMax })
    }

    handleClick = () => {
        console.log('this is:', this);
    }

    getJobType() {
        return this.state.jobTypes[this.state.jobType]
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
        const year = this.props.createdAt.slice(0, 4)
        const month = this.props.createdAt.slice(4, 6)
        const day = this.props.createdAt.slice(6, 8)
        const createdAt = `${year}-${month}-${day}`
        return (
            <tr onClick={this.handleClick}>
                <td>{this.props.title}</td>
                <td>{createdAt}</td>
                <td>{this.getJobType()}</td>
                <td>{this.props.city}</td>
                <td>{this.getExperience()}</td>
            </tr>
        )
    }
}
