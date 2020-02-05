import React from 'react'
import {Container, Image, List} from 'semantic-ui-react'
const StudentDetails = props => {
  const student = props.student
  return !student ? null : (
    <React.Fragment>
      <Container>
        <Image
          floated='left'
          size='small'
          src={student.avatar}
        />
        <h1>{student.first_name + ' '+ student.last_name}</h1>
        <h2>Username: {student.username}</h2>
        <h2>Email: {student.email}</h2>
        <h2>Pronouns: {student.pronouns}</h2>
        <h2>Bio: {student.bio}</h2>
        <h2>Favorite Language: {student.fav_language}</h2>
        <h2>Course: {student.course_name}</h2>
        <h2>Current Job:</h2>
        <p>{student.current_job}</p>
        <h2>Before Flatiron:</h2>
        <p>{student.before_flatiron}</p>
        <h2>Cohort name: {student.cohort.name}</h2>
        <h2>Projects:</h2>
        { student.user_projects === [] ? <List.Item>No Projects </List.Item> :
          student.user_projects.map(user_project => 
            <List>
              <List.Item>
                <Image avatar src={user_project.project.image} />
                {user_project.project.name}
              </List.Item>
            </List>
          )
        }
      </Container>
    </React.Fragment>
  )
}

export default StudentDetails
