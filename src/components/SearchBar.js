import React from 'react'
import { Form} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {onSearch} from '../redux/actionCreators'

const SearchBar = props => {
  return(
    <React.Fragment>
        <Form.Input label='Search:' focus
          placeholder='Search...'
          value={props.value}
          onChange={e => props.onSearch(e.target.value)}
        />
    </React.Fragment>
  )
}
const mapStateToProps = store => ({value: store.searchText})
export default connect(mapStateToProps, {onSearch})(SearchBar)
