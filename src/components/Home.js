import React from 'react'
import ProjectsContainer from '../containers/ProjectsContainer'
import {Container, Divider, Header, Segment} from 'semantic-ui-react'
const Home = () => {
  const home = true
  return(
    <React.Fragment>
      <Divider hidden />
      <Container>
      <Header as='h2' attached='top'>
        Welcome to //FlatiLife
      </Header>
      <Segment attached>
        Here go some welcome message to the website!
      </Segment>
        <Header as='h2'>Latest Projects</Header>
        <ProjectsContainer home={home}/>
      </Container>
    </React.Fragment>
  )
}

export default Home
