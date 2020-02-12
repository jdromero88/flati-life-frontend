import React from 'react'
import {connect} from 'react-redux'
import { Card, Divider, Form, Segment} from 'semantic-ui-react'
import StudentCard from '../components/StudentCard'
import SearchBar from '../components/SearchBar'
const filterBy = [
  {key: 'all', value:'all', id:'all', text: 'All'},
  {key: 'se', value:'Software Engineer', id:'Software Engineer',text: 'Software Engineer'},
  {key: 'ds', value:'Data Science', id:'Data Science',text: 'Data Science'},
]
class StudentsContainer extends React.Component{
  state ={
    filterType: 'all',
  }
  handleFilter = (e, {value}) => {
    this.setState({
      filterType: value
    })
  }

  render(){
    const {value} = this.state
    return !this.props.users ? <Segment loading></Segment> :(
      <React.Fragment>
        <Form>
          <Form.Group>
            <SearchBar />

            <Form.Select label='Filter by Course name:' placeholder='Select Course'
            options={filterBy}
            onChange={this.handleFilter}
            value={value}
            />
          </Form.Group>
        </Form>
        <Divider />
        <Card.Group itemsPerRow={3} fluid='true'>
          {
            this.props.users.filter(user => {
              switch (this.state.filterType) {
                case 'Software Engineer':
                  return user.course_name === this.state.filterType
                case 'Data Science':
                  return user.course_name === this.state.filterType
                default:
                  return user
              }
            }
            ).map(user => <StudentCard
              key={user.id}
              user={user}
            />
          )

          }
        </Card.Group>
      </React.Fragment>
    )
  }
}

//reading from state
const mapStateToProps = store => ({users: store.users.filter(user => user.username.toLowerCase().includes(store.searchText.toLowerCase()))
})

export default connect(mapStateToProps)(StudentsContainer)
