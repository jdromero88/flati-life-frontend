import React from 'react'
import {Link} from 'react-router-dom'
import { Button} from 'semantic-ui-react'
const HomeWelcome = props => {
  return(
    <React.Fragment>

    <h1>Welcome back {props.currentUser.first_name} to <span className='logo'> FLATI//LIFE</span>!</h1>
    <Button as={Link} to='/profile'>
    Go to your profile
    </Button>

    </React.Fragment>
  )
}

export default HomeWelcome
