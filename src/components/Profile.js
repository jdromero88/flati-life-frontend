import React from 'react'
import {connect} from 'react-redux'
import {Container,
Image, Divider, Menu, } from 'semantic-ui-react'
import EditProfile from './EditProfile'
import AddProject from './AddProject'

class Profile extends React.Component {

  userProjects = () => {
    this.props.projects.map(project => project.users.filter(user => user.id === this.props.currentUser.id))
  }

  render(){
    return !this.props.currentUser ? null : (
      <React.Fragment>
        <Container>
          <Divider hidden/>
          <Menu icon='labeled'>
            <EditProfile />
            <AddProject />
          </Menu>

          <Image src={this.props.currentUser.avatar} size='small' />
          <h1>Name: {this.props.currentUser.username}</h1>
          <h2>All users details goes here</h2>
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = store => ({currentUser: store.currentUser,
users: store.users,
projects: store.projects,
technologies: store.technologies,
cohorts: store.cohorts,
})
export default connect(mapStateToProps, null)(Profile)
