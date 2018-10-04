import React from "react"

import style from './app.css'

export default class ContactListItem extends React.Component {
    render() {
        return (
            <div className={`${style.boxHover} ${style.lightBox}`}>
                <h3>{this.props.title}</h3>
                <p>{this.props.data}</p>
            </div>
        );
    }
}
