import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteProject} from '../redux/actionCreators'
import { Item, Button, Divider, List } from 'semantic-ui-react'
import swal from 'sweetalert'
const ProjectList = props => {
  const handleClick = () => {
    console.log('delete this project', project)
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this project!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        props.deleteProject(project)

      }
    })
  }
  // debugger
  const {project} = props
  // console.log(project)
  // if (!props.project) {
  //   return null
  // }
  // !project ? null :
  return (
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
        <Button icon='trash alternate' onClick={handleClick} />
        <Button icon='edit outline' onClick={handleClick} />
      </Item.Group>
      <List divided relaxed>
        <List.Item>
          <List.Icon name='github' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
            <List.Description as='a'>Updated 10 mins ago</List.Description>
          </List.Content>
        </List.Item>
      </List>
      <Divider />
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch) => ({deleteProject: (project) => dispatch(deleteProject(project))})
export default connect(null, mapDispatchToProps)(ProjectList)
