import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Menu from "./menu"

const HeaderContainer = styled.div`
    margin: 0;
    margin-bottom: 20px;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src="http://www.siicanada.com/wp-content/uploads/2016/08/sii-canada-logo-website-72x110.png" alt="SII Canada Logo" />
      </Link>
      <Menu />
    </HeaderContainer>
  )
}

export default Header
