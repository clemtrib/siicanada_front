import React from 'react'
import {Link} from 'react-router-dom'

import style from './app.css'

export default class Footer extends React.Component {
    render () {
        return (
            <div className={style.footer}>
                <div className={style.container}>
                    <p>© SII CANADA. Tous droits réservés.</p>
                    <Link to="/">
                        <p>About</p>
                    </Link>
                </div>
            </div>
        )
    }
}
