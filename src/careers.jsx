import React from "react"


import style from './app.css'

import JobAd from "./jobAd"
import JobAdList from "./jobAdList"
import { Consumer } from "./context";

import Text from "./text"


export default class Careers extends React.Component {
    render() {
        return (
            <Consumer>
                {({ jobsList, jobSelected, loadJobsList, setJobSelected }) => {
                    const ads = jobsList,
                        ad = ads[jobSelected] || {}
                    return (
                        <div className={style.large}>
                            <Text title="Nous rejoindre" content="En recherche de postes permanents, d’opportunités en consultant, d’offres de stage ? Postulez en ligne !" />
                            <div className={`${style.large} ${style.jobAdds}`}>
                                <JobAdList ads={ads} load={loadJobsList} setJobSelected={setJobSelected} />
                                <JobAd title={ad.title} createdAt={ad.createdAt} jobType={ad.jobType} description={ad.description} />
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
