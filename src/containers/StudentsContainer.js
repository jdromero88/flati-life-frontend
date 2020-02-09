import React from 'react'
import {connect} from 'react-redux'
import { Card, Divider, } from 'semantic-ui-react'
import StudentCard from '../components/StudentCard'
import SearchBar from '../components/SearchBar'
const StudentsContainer = props => {
  return(
    <React.Fragment>
      <SearchBar />
      <Divider />
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
const mapStateToProps = store => ({users: store.users.filter(user => user.username.toLowerCase().includes(store.searchText.toLowerCase()))
})

export default connect(mapStateToProps)(StudentsContainer)
