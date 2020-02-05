import React from 'react'
import {Container, Input} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {onSearch} from '../redux/actionCreators'

const SearchBar = props => {
  return(
    <React.Fragment>
      <Container>
        <Input focus
          placeholder='Search...'
          value={props.value}
          onChange={e => props.onSearch(e.target.value)}
        />
      </Container>
    </React.Fragment>
  )
}
const mapStateToProps = store => ({value: store.searchText})
export default connect(mapStateToProps, {onSearch})(SearchBar)
