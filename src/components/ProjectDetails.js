import React from 'react'
import { Container, Image, List } from 'semantic-ui-react'
const ProjectDetails = props => {
  // debugger
  const project = props.project
  return !project ? null : (
    <React.Fragment>
        <Container>
          <Image
          floated='left'
          size='small'
          src={project.image}
          />
          <h1>Project Name: {project.name}</h1>
          <h2>Description:</h2>
          <p>{project.description}</p>
          <h2>Repository:</h2>
          <List>
          <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <a href={project.repository_url}  target='_blank' rel="noreferrer noopener">{project.repository_url}</a>
            </List.Content>
          </List.Item>
          </List>
        </Container>
    </React.Fragment>
  )
}
export default ProjectDetails
