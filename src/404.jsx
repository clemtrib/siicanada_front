import React from 'react'

import { Colors } from "./styles"
import styled from "styled-components"

const ErrorMessage = styled.div`
    color: ${Colors.grey};
    font-size: 170px;
    line-height: 1;
    font-weight: 700;
`

export default class Page404 extends React.Component {
    render() {
        return (
            <ErrorMessage>404</ ErrorMessage>
        )
    }
}
