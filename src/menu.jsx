import React from 'react'
import { Link } from 'react-router-dom'

import style from './app.css'

export default class Menu extends React.Component {
    render() {
        return (
            <div>
                <ul>
                <li><Link to="/">
                        Home
                    </Link></li>
                    <li><Link to="/jobs">
                        Jobs
                    </Link></li>
                    <li><Link to="/contact">
                        Contact
                    </Link></li>
                </ul>
            </div>
        )
    }
}