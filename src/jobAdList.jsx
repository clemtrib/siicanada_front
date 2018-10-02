import React from "react"
import JobAd from "./jobAd"

export default class JobAdList extends React.Component {
    render() {
        const description = `vthwedf jwgds vwjdsgwey fweufdgvwe yugwedysjwe tywed`
        return (
            <div>
                <JobAd title="web developer" createdAt="20181012" contract={1} description={description}  />
            </div>
        )
    }
}
