import React from 'react'
import { Container, Image } from 'semantic-ui-react'
const ProjectDetails = props => {
  // debugger
  const project = props.project
  return !project ? null : (
    <React.Fragment>
        <Container>
          <Image
          floated='right'
          size='small'
          src={project.avatar}
          />
          <h1>Project Name: {project.name}</h1>

        </Container>
    </React.Fragment>
  )
}
export default ProjectDetails
