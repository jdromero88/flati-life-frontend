import React from 'react'
import StudentsContainer from '../containers/StudentsContainer'
import {Divider, Loader} from 'semantic-ui-react'
import {connect} from 'react-redux'
class Students extends React.Component {
  // debugger
  render(){
    return(
      <React.Fragment>
        <Divider hidden/>
        {this.props.users ?
        <StudentsContainer />
        : <Loader active content='Loading' />
        }
      </React.Fragment>
    )
  }
}
//reading from state
const mapStateToProps = store => ({users: store.users})
export default connect(mapStateToProps, null)(Students)
