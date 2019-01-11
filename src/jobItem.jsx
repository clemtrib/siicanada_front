import React from "react"
import styled from "styled-components"
import { jobTypes } from "./careersData"
import { Middle, H3, P } from "./styles"

const JobItemContainer = styled.div`
    padding: 10px;
`

export default class JobItem extends React.Component {

  componentWillMount() {

    const { job } = this.props ? this.props : {},
      { type } = job ? job : {}
    this.setState(type)
    /*
        const { job } = this.state,
          { type } = job
        this.setState(type)*/

  }

  render() {

    //const { jobs, load } = this.props ? this.props : {}

    const { job } = this.state,
      { title, createdAt, type, description } = job,
      year = (createdAt || "").slice(0, 4),
      month = (createdAt || "").slice(4, 6),
      day = (createdAt || "").slice(6, 8),
      createdAtFormatted = `${year}-${month}-${day}`

    /*
    
     */
    return (
      <div>
        <Middle>
          <JobItemContainer>
            <H3>{title}</H3>
            <P>{`Created at ${createdAtFormatted}`}</P>
            <P>{jobTypes[type]}</P>
            <P>{`Description: ${description}`}</P>
          </JobItemContainer>
        </Middle>
      </div>
    )
  }

}
