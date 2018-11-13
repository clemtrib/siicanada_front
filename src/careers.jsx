import React from "react"
import { Large } from "./styles";
import JobItem from "./jobItem"
import JobList from "./jobList"
import { Consumer } from "./context";
import Text from "./text"
import styled from "styled-components"
import { getJobs } from "./api/zoho";

const Jobs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export default class Careers extends React.Component {

    componentDidMount() {
        getJobs((jobs) => console.log(`componentDidMount`, jobs))
    }

    render() {
        return (
            <Consumer>
                {({ jobsList, jobSelected, loadJobsList, setJobSelected }) => {
                    const jobs = jobsList,
                        job = jobs[jobSelected] || {}
                    return (
                        <Large>
                            <Text title="Nous rejoindre" content="En recherche de postes permanents, d’opportunités en consultant, d’offres de stage ? Postulez en ligne !" />
                            <Jobs>
                                <JobList jobs={jobs} load={loadJobsList} setJobSelected={setJobSelected} />
                                <JobItem job={job} />
                            </Jobs>
                        </Large>
                    )
                }}
            </Consumer>
        )
    }
}
