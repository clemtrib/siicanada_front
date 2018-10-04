import React from "react"
import JobAd from "./jobAd"
import JobAdListItem from "./jobAdListItem"

export default class JobAdList extends React.Component {
    render() {

        const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu cursus metus. Curabitur pharetra odio vitae nisl pharetra, sit amet bibendum mauris accumsan.`

        const ads = [
            {
                id: 1,
                title: "web developer",
                createdAt: "20181012",
                contract: 3,
                description: description
            }, {
                id: 2,
                title: "web designer",
                createdAt: "20181012",
                contract: 1,
                description: description
            }, {
                id: 3,
                title: "account manager",
                createdAt: "20181012",
                contract: 2,
                description: description
            }
        ]

        const list = ads.map((ad) =>
            <JobAdListItem key={ad.id} title={ad.title.toUpperCase()} createdAt={ad.createdAt} contract={ad.contract} description={ad.description} />
        );

        return (
            <div>
                <table>
                    <tbody>
                        {list}
                    </tbody>
                </table>
                <JobAd title={ads[0].title} createdAt={ads[0].createdAt} contract={ads[0].contract} description={ads[0].description} />
            </div>
        )
    }
}
