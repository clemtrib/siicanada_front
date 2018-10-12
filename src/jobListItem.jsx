import React from "react"
import { jobTypes } from "./careersData"

import styled from 'styled-components'
import { Colors, Large, Middle, H3 } from "./styles";

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
            <Line onClick={this.props.onClick}>
                <Cell>{job.title.toUpperCase()}</Cell>
                <Cell>{createdAt}</Cell>
                <Cell>{this.getJobType()}</Cell>
                <Cell>{job.city}</Cell>
                <Cell>{this.getExperience()}</Cell>
            </Line>
        )
    }

}
