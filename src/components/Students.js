import React from 'react'
import StudentsContainer from '../containers/StudentsContainer'
import {Divider} from 'semantic-ui-react'
const Students = () => {
  return (
    <React.Fragment>
      <Divider hidden/>
      <StudentsContainer />
    </React.Fragment>
  )
}
export default Students
