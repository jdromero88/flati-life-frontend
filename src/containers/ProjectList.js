import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteProject} from '../redux/actionCreators'
import { Item, Button, Icon, Divider } from 'semantic-ui-react'
const ProjectList = props => {
  const handleClick = () => {
    console.log('delete this project', project)
    props.deleteProject(project)
  }
  debugger
  const {project} = props
  console.log(project)
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
        <Button onClick={handleClick}>
          <Icon name='trash alternate'/>
        </Button>
      </Item.Group>
      <Divider />
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch) => ({deleteProject: (project) => dispatch(deleteProject(project))})
export default connect(null, mapDispatchToProps)(ProjectList)
