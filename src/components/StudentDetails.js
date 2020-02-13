import React from 'react'
import {Container, Image, Item, List, Grid, Divider} from 'semantic-ui-react'
import moment from 'moment'
import ProjectList from '../containers/ProjectList'
const StudentDetails = props => {
  const {avatar, first_name, last_name, email, bio, username, pronouns, fav_language, course_name, created_at, cohort} = props.student
  const sDetail = true
  return !props.student ? null : (
    <React.Fragment>
      <Container>
      <Divider hidden/>
      <Divider hidden/>
      <Divider hidden/>
      <Divider hidden/>
      <Grid className='profile-container'>
        <Grid.Column width={3}>
        <Image
          floated='left'
          size='small'
          src={avatar}
        />
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header>{first_name +' '+ last_name} </Item.Header>
              <Item.Meta><strong>Bio:</strong></Item.Meta>
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

        { props.student.user_projects === [] ? <List.Item>No Projects </List.Item> :
          props.student.user_projects.map(user_project => <ProjectList key={user_project.id} project={user_project.project} sDetail={sDetail}/>
          )
        }
        </Grid.Column>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default StudentDetails
