import React from "react"
import style from "./app.css"

export default class App extends React.Component {
    render() {
        let text = "hello world !"
        return (
            <div>
                <h1 className={style.title}>Hello World</h1>
            </div>
        )
    }
}
