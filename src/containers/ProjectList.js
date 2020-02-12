import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteProject} from '../redux/actionCreators'
import EditProject from '../components/EditProject'
import {Button, Divider, Item } from 'semantic-ui-react'
import swal from 'sweetalert'
const ProjectList = props => {
  const handleClick = () => {
    // console.log('delete this project', project)
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
  const {id, name, description, image, repository_url} = props.project
  const {project} = props
  return (
    <React.Fragment>
      <Item.Group link>
        <Item as={Link} to={`/projects/${id}`}>
        <Item.Image size='tiny' src={!image ? 'https://inteligenciamm.com.br/wp-content/uploads/2015/10/Logo-Default.png' : image} />
        <Item.Content>
          <Item.Header>{name}</Item.Header>
          <Item.Description>{description}</Item.Description>
          <Item icon='linkify'content={repository_url}/>
        </Item.Content>
        </Item>
        <Button.Group>
          <Button icon='trash alternate' onClick={handleClick} />
          <EditProject project={project}/>
        </Button.Group>
      </Item.Group>
      <Divider />
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch) => ({deleteProject: (project) => dispatch(deleteProject(project))})
export default connect(null, mapDispatchToProps)(ProjectList)
