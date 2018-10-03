import React from "react"
import JobAd from "./jobAd"

export default class JobAdList extends React.Component {
    render() {

        const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu cursus metus. Curabitur pharetra odio vitae nisl pharetra, sit amet bibendum mauris accumsan.`

        const  ads = [
            {
                id : 1,
                title: "web developer",
                createdAt: "20181012", 
                contract: 3, 
                description: description
            }, {
                id : 2,
                title: "web designer",
                createdAt: "20181012", 
                contract: 1, 
                description: description
            }, {
                id : 3,
                title: "account manager",
                createdAt: "20181012", 
                contract: 2, 
                description: description
            }
        ]

        const list = ads.map((ad) =>
            <tr key={ad.id}>
                <td>{ad.title.toUpperCase()}</td>
            </tr>
        );

        return (
            <div>
                <table>
                    {list}
                </table>
                <JobAd title="web developer" createdAt="20181012" contract={1} description={description}  />
            </div>
        )
    }
}
