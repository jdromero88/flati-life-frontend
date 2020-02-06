import React from 'react'
import {connect} from 'react-redux'
import SearchBar from '../components/SearchBar'
import TechnologyCard from '../components/TechnologyCard'
import {Divider, Card} from 'semantic-ui-react'
const TechnologiesContainer = props => {
  return(
    <React.Fragment>
      <SearchBar />
      <Divider />
      <Card.Group itemsPerRow={3} fluid >
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
const mapStateToProps = store => ({technologies:
  store.technologies.filter(technology => technology.name.toLowerCase().includes(store.searchText.toLowerCase()))
})
export default connect(mapStateToProps)(TechnologiesContainer)
