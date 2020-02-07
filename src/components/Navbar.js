import React from 'react'
import {connect} from 'react-redux'
import { Link, NavLink } from "react-router-dom"
import { Menu, Sticky, Image, Icon } from "semantic-ui-react"
import logo from '../fs-logo.png'
class Navbar extends React.Component{
  handleLogout = () => {
    this.props.currentUser = null
  }
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
          {/*<NavLink to='/resources' className='item'>Resources</NavLink>*/}
          <NavLink to='/technologies' className='item'>Technologies</NavLink>
          <Menu.Menu position='right'>
            { !this.props.currentUser ? null
              : <NavLink to='/profile' className='item'>
              <Icon name='user circle'size='big'/>
              </NavLink>
            }
            { this.props.currentUser
              ? <NavLink to='/logout' className='item'>
                <Icon name='log out'size='big'/>
              </NavLink>
              : <NavLink to='/login' className='item'>Login
                <Icon name='user circle'size='big'/>
              </NavLink>
            }
          </Menu.Menu>
        </Menu>

      </Sticky>
    )
  }
}
const mapStateToProps = store => ({currentUser: store.currentUser})
export default connect(mapStateToProps, null)(Navbar)
