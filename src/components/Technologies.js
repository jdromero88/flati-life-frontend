import React from 'react'
import TechnologiesContainer from '../containers/TechnologiesContainer'
import { Divider} from 'semantic-ui-react'
class Technologies extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Divider hidden/>
        <TechnologiesContainer />
      </React.Fragment>
    )
  }
}

export default Technologies
