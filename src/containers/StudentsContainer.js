import React from 'react'
import {connect} from 'react-redux'
import { Card } from 'semantic-ui-react'
import StudentCard from '../components/StudentCard'

const StudentsContainer = props => {
  return(
    <React.Fragment>
      <Card.Group itemsPerRow={3} fluid>
        {
          props.users.map(user => <StudentCard
            key={user.id}
            user={user}
            />
          )
        }
      </Card.Group>
    </React.Fragment>
  )
}

//reading from state
const mapStateToProps = state => ({users: state.users})

export default connect(mapStateToProps)(StudentsContainer)
