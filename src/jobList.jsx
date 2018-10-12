import React from "react"
import JobListItem from "./jobListItem"
import styled from "styled-components"

const Table = styled.table`
    width: 50%;
    border: none;
    border-collapse: collapse;
    width: 50%;
    margin: 10px;
    padding: 20px;
`

export default class JobAdList extends React.Component {

    componentWillMount() {
        if (!this.props.jobs.length)
            this.props.load()
    }

    render() {
        const jobs = this.props.jobs
        return (
            <Table>
                <tbody>
                    {jobs.map((job, i) =>
                        <JobListItem
                            onClick={() => this.props.setJobSelected(i)}
                            key={i}
                            job={job} />
                    )}
                </tbody>
            </Table>
        )
    }

}
