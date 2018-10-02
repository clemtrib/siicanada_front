import React from "react"
import {Link} from "react-router-dom"
// import style from "./app.css"
import Annonce from "./annonce"

export default class App extends React.Component {
    render() {
        const description = `vthwedf jwgds vwjdsgwey fweufdgvwe yugwedysjwe tywed`
        return (
            <div>
                <Annonce title="web developer" createdAt="20181012" contract={1} description={description}  />
                <Link to="/contact">
                    Contact
                </Link>
            </div>
        )
    }
}
