import React from 'react'

import style from './app.css'
import { Large, H1arrow } from "./styles";

export default class Text extends React.Component {
    render() {
        return (
            <Large className={`${style.text}`}>
                <div className={style.container}>
                    <H1arrow>{this.props.title}</H1arrow>
                    <div>
                        {this.props.content}
                    </div>
                </div>
            </Large>
        )
    }
}
