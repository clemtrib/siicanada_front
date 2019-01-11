import React from "react"
import styled from "styled-components"
import { jobTypes } from "./careersData"
import { Colors } from "./styles"

const Line = styled.tr`
    border-right-style: none;
    border-left-style: none;
    width: 50%;
    text-align: left;

    :nth-child(odd) {
        background-color: ${Colors.grey};
    }

    :nth-child(even) {
        background-color: ${Colors.white};
    }

    :nth-child(even):hover,
    :nth-child(odd):hover {
        cursor: pointer;
        background-color: ${Colors.darkblue};
        color: ${Colors.grey};
    }
`

const Cell = styled.td`
    padding: 4px 0;
`

export default class JobListItem extends React.Component {

  constructor() {
    super()
    this.state = {
      type: 0,
      experienceMin: null,
      experienceMax: null
    }
  }

  componentWillReceiveProps({ job } = { job: {} }) {
    const type = job.type,
      experienceMin = job.experienceMin,
      experienceMax = job.experienceMax
    this.setState({
      type,
      experienceMin,
      experienceMax
    })
  }

  getJobType() {
    const { type } = this.state
    return jobTypes[type]
  }

  getExperience() {
    const { experienceMin, experienceMax } = this.state
    if (experienceMin == null && experienceMax == null)
      return ""
    else if (experienceMin == null)
      return `${experienceMax}- years`
    else if (experienceMax == null)
      return `${experienceMin}+ years`
    else
      return `${experienceMin}-${experienceMax} years`
  }

  render() {
    const { job } = this.props ? this.props : { job: {} },
      { onClick } = this.props ? this.props : {},
      year = job.createdAt.slice(0, 4),
      month = job.createdAt.slice(4, 6),
      day = job.createdAt.slice(6, 8),
      createdAt = `${year}-${month}-${day}`
    return (
      <Line onClick={onClick}>
        <Cell>{job.title.toUpperCase()}</Cell>
        <Cell>{createdAt}</Cell>
        <Cell>{this.getJobType()}</Cell>
        <Cell>{job.city}</Cell>
        <Cell>{this.getExperience()}</Cell>
      </Line>
    )
  }

}
