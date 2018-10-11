import React from 'react'
import { Link } from 'react-router-dom'

import style from './app.css'
import styled from 'styled-components'

const Foot = styled.div`
    width: 100%;
    background-color: #242830;
    padding: 40px 0 30px;
`

const FootContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export default class Footer extends React.Component {
    render() {
        return (
            <Foot>
                <FootContainer className={style.container}>
                    <p>© SII CANADA. Tous droits réservés.</p>
                    <Link to="/">
                        <p>About</p>
                    </Link>
                </FootContainer>
            </Foot>
        )
    }
}
