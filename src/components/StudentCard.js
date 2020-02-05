import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
const StudentCard = props => {
  const user = props.user
  return(
    <React.Fragment>
        <Card
          as={Link}
          to={`/students/${user.id}`}
        >
          <Card.Content>
            <Image
              floated='right'
              size='tiny'
              src={user.avatar}
            />
            <Card.Header>{user.first_name +' '+user.last_name}</Card.Header>
            <Card.Meta>Username: {user.username}</Card.Meta>

          </Card.Content>
        </Card>
    </React.Fragment>
  )
}
export default StudentCard
