import React from "react"

import style from './app.css'
import JobAdListItem from "./jobAdListItem"

export default class JobAdList extends React.Component {

    componentWillMount() {
        if (!this.props.ads.length)
            this.props.load()
    }

    render() {
        const ads = this.props.ads
        return (
            <table className={style.middle}>
                <tbody>
                    {ads.map((ad, i) =>
                        <JobAdListItem
                            onClick={() => this.props.setJobSelected(i)}
                            key={i}
                            title={ad.title.toUpperCase()}
                            createdAt={ad.createdAt}
                            jobType={ad.jobType}
                            description={ad.description}
                            position={ad.position}
                            experienceMin={ad.experienceMin}
                            experienceMax={ad.experienceMax}
                            city={ad.city}
                            industry={ad.industry} />
                    )}
                </tbody>
            </table>
        )
    }
}
