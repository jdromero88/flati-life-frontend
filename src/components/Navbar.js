import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { Menu, Sticky, Image, Icon } from "semantic-ui-react"
import logo from '../fs-logo.png'
class Navbar extends React.Component{

  render(){
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
      <NavLink to='/login' className='right item'>Login
      <Icon name='user circle'size='big'/>
      </NavLink>


      </Menu>
      </Sticky>
    )
  }
}

export default Navbar
