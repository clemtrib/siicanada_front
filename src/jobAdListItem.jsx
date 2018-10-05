import React from "react"

export default class JobAdListItem extends React.Component {
    constructor() {
        super()
        this.state = {
            jobTypes: ["Part-time", "Full-time"],
            jobType: 0
        }
    }

    componentWillMount() {
        const jobType = this.props.jobType
        this.setState({ jobType })
    }

    getJobType() {
        return this.state.jobTypes[this.state.jobType]
    }

    render() {
        const year = this.props.createdAt.slice(0, 4)
        const month = this.props.createdAt.slice(4, 6)
        const day = this.props.createdAt.slice(6, 8)
        const createdAt = `${year}-${month}-${day}`
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>{createdAt}</td>
                <td>{this.getJobType()}</td>
            </tr>
        )
    }
}
