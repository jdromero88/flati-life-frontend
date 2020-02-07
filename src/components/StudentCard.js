import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
const StudentCard = props => {
  const user = props.user
  const currentUser = props.currentUser
  return(
    <React.Fragment>
        <Card
          as={!currentUser ? null : Link}
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
const mapStateToProps = store => ({currentUser: store.currentUser})
export default connect(mapStateToProps, null)(StudentCard)
