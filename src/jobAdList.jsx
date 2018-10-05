import React from "react"

import style from './app.css'

import Text from "./text"
import JobAd from "./jobAd"
import JobAdListItem from "./jobAdListItem"

export default class JobAdList extends React.Component {
    render() {

        const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu cursus metus. Curabitur pharetra odio vitae nisl pharetra, sit amet bibendum mauris accumsan.`

        const ad1 = {
            id: 1,
            title: "web developer",
            createdAt: "20181012",
            jobType: 0,
            description: description
        },
            ad2 = {
                id: 2,
                title: "web designer",
                createdAt: "20181012",
                jobType: 1,
                description: description
            },
            ad3 = {
                id: 3,
                title: "account manager",
                createdAt: "20181012",
                jobType: 1,
                description: description
            }
        const ads = [ad1, ad2, ad3, ad1, ad2, ad3, ad1, ad2, ad3, ad1, ad2, ad3, ad1, ad2, ad3, ad1, ad2, ad3]

        let i = 0
        const list = ads.map((ad) =>
            <JobAdListItem key={i++} title={ad.title.toUpperCase()} createdAt={ad.createdAt} jobType={ad.jobType} description={ad.description} />
        );

        return (
            <div className={style.large}>
                <Text title="Nous rejoindre" content="En recherche de postes permanents, d’opportunités en consultant, d’offres de stage ? Postulez en ligne !" />
                <div className={`${style.large} ${style.jobAdds}`}>
                    <table className={style.middle}>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                    <JobAd title={ads[0].title} createdAt={ads[0].createdAt} jobType={ads[0].jobType} description={ads[0].description} />
                </div>
            </div>
        )
    }
}
