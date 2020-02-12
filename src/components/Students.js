import React from 'react'
import StudentsContainer from '../containers/StudentsContainer'
import {Divider} from 'semantic-ui-react'
class Students extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Divider hidden/>
        <StudentsContainer />
      </React.Fragment>
    )
  }
}
//reading from state

export default Students
