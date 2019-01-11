import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const MenuItemList = styled.ul`
    list-style: none;
`

const Menu = () => {
  return (
    <div>
      <MenuItemList>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/myspace">Mon espace</Link></li>
      </MenuItemList>
    </div>
  )
}

export default Menu

