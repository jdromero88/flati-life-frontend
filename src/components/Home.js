import React from 'react'
import ProjectsContainer from '../containers/ProjectsContainer'
import {Container} from 'semantic-ui-react'
const Home = () => {
  const home = true
  return(
    <React.Fragment>
      <Container>
        <h2>Latest Projects</h2>
        <ProjectsContainer home={home}/>
      </Container>
    </React.Fragment>
  )
}

export default Home
