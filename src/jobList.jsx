import React from "react"
import styled from "styled-components"
import JobListItem from "./jobListItem"

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
    const { jobs, load } = this.props ? this.props : {}
    if (!jobs.length)
      load()
  }

  //componentWillReceiveProps({ jobs } = {}) {}

  render() {
    const { jobs, setJobSelected } = this.props ? this.props : { job: {} }
    return (
      <Table>
        <tbody>
          {jobs.map((job, i) =>
            <JobListItem onClick={() => setJobSelected(i)} key={job.id.concat(Math.random().toString(36).substring(7))} job={job} />
          )}
        </tbody>
      </Table>
    )
  }

}
