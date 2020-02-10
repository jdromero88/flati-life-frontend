import React from 'react'
import {connect} from 'react-redux'
import {Container,
Image, Divider, } from 'semantic-ui-react'
import EditProfile from './EditProfile'
import AddProject from './AddProject'
import ProjectList from '../containers/ProjectList'

class Profile extends React.Component {

  userProjects = () => {
    this.props.projects.map(project => project.users.filter(user => user.id === this.props.currentUser.id))
  }

  render(){
    return !this.props.currentUser ? null : (
      <React.Fragment>
        <Container>
          <Divider hidden/>
          <EditProfile currentUser={this.props.currentUser}/>
          <AddProject />
          <Divider hidden/>
          <Divider hidden/>
          <Image src={this.props.currentUser.avatar} size='small' />
          <h1>Name: {this.props.currentUser.first_name}</h1>
          <h1>Username: {this.props.currentUser.username}</h1>
          <h2>All users details goes here</h2>
          {
            this.props.currentUser.user_projects.map(p => {
              // debugger
              return <ProjectList
            key={p.id}
            project={p}/>
            })
          }
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
