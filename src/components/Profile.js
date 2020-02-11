import React from 'react'
import {connect} from 'react-redux'
import {Container,
Image, Divider, Grid} from 'semantic-ui-react'
import EditProfile from './EditProfile'
import AddProject from './AddProject'
import ProjectList from '../containers/ProjectList'

class Profile extends React.Component {

  render(){

    return !this.props.currentUser ? null : (
      <React.Fragment>
        <Container>
          <Divider hidden/>
          <EditProfile currentUser={this.props.currentUser}/>
          <AddProject />
          <Divider hidden/>
          <Divider hidden/>
          <Grid>
            <Grid.Column width={3}>
              <Image src={this.props.currentUser.avatar} size='small' />
              <h1>Name: {this.props.currentUser.first_name +' '+ this.props.currentUser.last_name} </h1>
              <h1>Username: {this.props.currentUser.username}</h1>
            </Grid.Column>
            <Grid.Column width={13}>
            <h2>Projects:</h2>

            {
              // this.props.currentUser.user_projects.map(p => {
                // store.projects.filter(project => project.name.toLowerCase().includes(store.searchText.toLowerCase()))
                //  .id === this.props.currentUser.id)
                this.props.currentUser.user_projects.map(p => {
                  // debugger
                  return   <ProjectList
                  key={p.id}
                  project={p.project}/>
                })
              }
            </Grid.Column>
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = store => {
  // debugger
  return ({
    currentUser: store.currentUser,
    users: store.users,
    projects: store.projects,
    technologies: store.technologies,
    cohorts: store.cohorts,
})
}
export default connect(mapStateToProps, null)(Profile)
