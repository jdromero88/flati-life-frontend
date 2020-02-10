import React from 'react'
import {Link} from 'react-router-dom'
import { Item, Button, Icon, Divider } from 'semantic-ui-react'
const ProjectList = props => {
  const project = props.project.project
  return(
    <React.Fragment>
      <Item.Group link>
        <Item as={Link} to={`/projects/${project.id}`}>
          <Item.Image size='tiny' src={project.image} />
          <Item.Content>
            <Item.Header>{project.name}</Item.Header>
            <Item.Description>{project.description}</Item.Description>
            <Item icon='linkify'
            content={project.repository_url}
          />
          </Item.Content>
        </Item>
        <Button>
          <Icon name='trash alternate'/>
        </Button>
      </Item.Group>
      <Divider />
    </React.Fragment>
  )
}

export default ProjectList
