import React from "react"

import style from './app.css'
import { Colors, Large, Middle } from "./styles";

import JobItem from "./jobItem"
import JobList from "./jobList"
import { Consumer } from "./context";
import Text from "./text"

export default class Careers extends React.Component {
    render() {
        return (
            <Consumer>
                {({ jobsList, jobSelected, loadJobsList, setJobSelected }) => {
                    const jobs = jobsList,
                        job = jobs[jobSelected] || {}
                    return (
                        <Large>
                            <Text title="Nous rejoindre" content="En recherche de postes permanents, d’opportunités en consultant, d’offres de stage ? Postulez en ligne !" />
                            <Large className={`${style.jobAdds}`}>
                                <JobList jobs={jobs} load={loadJobsList} setJobSelected={setJobSelected} />
                                <JobItem job={job} />
                            </Large>
                        </Large>
                    )
                }}
            </Consumer>
        )
    }
}
