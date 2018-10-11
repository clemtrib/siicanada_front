import React from "react"

import style from './app.css'
import JobListItem from "./jobListItem"

export default class JobAdList extends React.Component {

    componentWillMount() {
        if (!this.props.jobs.length)
            this.props.load()
    }

    render() {
        const jobs = this.props.jobs
        return (
            <table className={style.middle}>
                <tbody>
                    {jobs.map((job, i) =>
                        <JobListItem
                            onClick={() => this.props.setJobSelected(i)}
                            key={i}
                            job={job} />
                    )}
                </tbody>
            </table>
        )
    }

}
