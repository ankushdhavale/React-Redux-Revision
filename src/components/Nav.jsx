import React from 'react'
import NavItem from './NavItem'
import "./Nav.css"
const Nav = () => {
  return (
    <div className='nav-container'>
        <NavItem title='ADD USER' link='/'/>
        <NavItem title='USER LIST' link='/user-list'/>
        <NavItem title='PRODUCT' link='/product'/>
        <NavItem title='PRODUCT LIST' link='/product-list'/>
    </div>
  )
}

export default Nav
