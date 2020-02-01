import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { Menu, Sticky, Image } from "semantic-ui-react"
import logo from '../fs-logo.png'
const Navbar = () => {
  return(
    <Sticky>
    <Menu>
      <Menu.Item>
        <Link to='/'>
          <Image src={logo} size='tiny'/>
        </Link>
      </Menu.Item>
      <NavLink to='/' className='item'>Home</NavLink>
      <NavLink to='/projects' className='item'>Projects</NavLink>
      <NavLink to='/students' className='item'>Students</NavLink>
      <NavLink to='/resources' className='item'>Resources</NavLink>
      <NavLink to='/technologies' className='item'>Technologies</NavLink>
    </Menu>
    </Sticky>
  )
}

export default Navbar
