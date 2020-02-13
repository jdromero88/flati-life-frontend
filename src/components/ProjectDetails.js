import React from 'react'
import { Container, Image, List, Divider, Grid, Item } from 'semantic-ui-react'
const ProjectDetails = props => {
  // debugger
  const project = props.project
  return !project ? null : (
    <React.Fragment>
        <Container>
        <Divider hidden/>
        <Divider hidden/>
          <Grid className='technology-container'>
          <Image
          floated='left'
          size='small'
          src={project.image}
          />
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header>Name: {project.name} </Item.Header>
                <Item.Description></Item.Description>
                <Item.Description>
                  <strong>Description: </strong>
                  {project.description}
                </Item.Description>
                <Item.Description as='a' href={project.repository_url} target='_blank'>
                <strong>Repository: </strong>
                {project.repository_url}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
          </Grid>
        </Container>
    </React.Fragment>
  )
}
export default ProjectDetails
