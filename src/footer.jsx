import React from "react"
import { Link } from "react-router-dom"
import { Container, P } from "./styles"
import styled from "styled-components"

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
                <Container>
                    <FootContainer>
                        <P>© SII CANADA. Tous droits réservés.</P>
                        <Link to="/">
                            <P>About</P>
                        </Link>
                    </FootContainer>
                </Container>
            </Foot>
        )
    }
}
