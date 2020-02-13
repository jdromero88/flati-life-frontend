import React from 'react'
import {connect} from 'react-redux'
import {Container, Item, Button,
Image, Divider, Grid} from 'semantic-ui-react'
import EditProfile from './EditProfile'
import AddProject from './AddProject'
import ProjectList from '../containers/ProjectList'
import moment from 'moment'

class Profile extends React.Component {
  render(){
    // debugger
    const {avatar, first_name, last_name, email, bio, username, pronouns, fav_language, course_name, created_at, cohort} = this.props.currentUser
    return !this.props.currentUser ? null : (
      <React.Fragment>
        <Container>
          <Divider hidden/>
          <Button.Group floated='left'>
          <EditProfile currentUser={this.props.currentUser}/>
          <AddProject />
          </Button.Group>
          <Divider hidden/>
          <Divider hidden/>
          <Divider hidden/>
          <Divider hidden/>
          <Grid className='profile-container'>
            <Grid.Column width={3}>
              <Image src={avatar} size='small' />
              <Item.Group>
                <Item>
                  <Item.Content>
                    <Item.Header>{first_name +' '+ last_name} </Item.Header>
                    <Item.Description><strong>Bio:</strong></Item.Description>
                    <Item.Description>
                      {bio}
                    </Item.Description>
                    <Item.Description><strong>Username:</strong> {username}</Item.Description>
                    <Item.Description><strong>Pronouns:</strong> {pronouns}</Item.Description>
                    <Item.Description><strong>Email:</strong> {email}</Item.Description>
                    <Item.Description><strong>Favorite Language:</strong> {fav_language}</Item.Description>
                    <Item.Description><strong>Course Name:</strong> {course_name}</Item.Description>
                    <Item.Description><strong>Cohort:</strong> {cohort.name}</Item.Description>
                    <Item.Description><strong>Joined:</strong> {moment(created_at, 'YYYYMMDD').fromNow()}</Item.Description>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Grid.Column>
            <Grid.Column width={13}>
            <h2>Projects:</h2>
            <Divider hidden/>
            {
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
