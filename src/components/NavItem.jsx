import React from 'react'
import "./NavItem.css"
import { NavLink } from 'react-router-dom'

const NavItem = ({title , link}) => {
  return (
    <div className='nav-items'>
      <NavLink to={link}>{title}</NavLink>
    </div>
  )
}

export default NavItem
