import React from 'react'

import style from './app.css'

export default class Text extends React.Component {
    render() {
        return (
            <div className={`${style.large} ${style.text}`}>
                <div className={style.container}>
                    <h1 className={style.arrow}>{this.props.title}</h1>
                    <div>
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
}
