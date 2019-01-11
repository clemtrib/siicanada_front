import React from "react"
import styled from "styled-components"
import { Route } from "react-router-dom"
import Header from "./header"
import Footer from "./footer"

const App = styled.div`
    font-family: Calibri;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default function Layout({ component: Page, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => (
        <App>
          <Header />
          <Page />
          <Footer />
        </App>
      )}
    />
  )
}
