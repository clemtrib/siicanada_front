import React from "react"
import { jobTypes } from "./careersData"

import { Middle, H3, P } from "./styles";
import styled from "styled-components"

const JobItemContainer = styled.div`
    padding: 10px;
`

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
            <Middle>
                <JobItemContainer>
                    <H3>{job.title}</H3>
                    <P>Created at {createdAt}</P>
                    <P>{jobTypes[job.type]}</P>
                    <P>Description: {job.description}</P>
                </JobItemContainer>
            </Middle>
        )
    }

}
