import React from 'react'
import { Card, Image } from 'semantic-ui-react'
const StudentCard = props => {
  const user = props.user
  return(
    <React.Fragment>
        <Card>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src={user.avatar}
            />
            <Card.Header>{user.first_name +' '+user.last_name}</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
        </Card>
    </React.Fragment>
  )
}
export default StudentCard
