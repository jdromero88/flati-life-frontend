import React from 'react'
import {connect} from 'react-redux'
import SearchBar from '../components/SearchBar'
import TechnologyCard from '../components/TechnologyCard'
import {Divider, Card, Form} from 'semantic-ui-react'
import AddTechnology from '../components/AddTechnology'
const TechnologiesContainer = props => {
  return(
    <React.Fragment>
      <Form>
        <Form.Group>
          <SearchBar />
          <AddTechnology />
        </Form.Group>
      </Form>
      <Divider />
      <Card.Group itemsPerRow={3} fluid='true' >
        {
          props.technologies.map(technology => <TechnologyCard
            key={technology.id}
            technology={technology}
            />)
        }
      </Card.Group>
    </React.Fragment>
  )
}
const mapStateToProps = store => {
  return ({ technologies:
  store.technologies.filter(technology => technology.name.toLowerCase().includes(store.searchText.toLowerCase())),
  currentUser: store => ({currentUser: store.currentUser})
  })
}
export default connect(mapStateToProps, null)(TechnologiesContainer)
