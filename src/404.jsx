import React from "react"
import styled from "styled-components"
import { Colors } from "./styles"

const ErrorMessage = styled.div`
    color: ${Colors.grey};
    font-size: 170px;
    line-height: 1;
    font-weight: 700;
`

const Page404 = () => {
  return (
    <ErrorMessage>404</ErrorMessage>
  )
}

export default Page404
