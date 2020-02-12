import React from 'react'
import {connect} from 'react-redux'
import { withRouter} from 'react-router-dom'
import {updateProject} from '../redux/actionCreators'
import { Modal,
Form, Button,
Image,
Grid, } from 'semantic-ui-react'
import swal from 'sweetalert'
class EditProject extends React.Component {
  state = {
    editProject:{
      name: '',
      description: '',
      image: '',
      repository_url: '',
      modalIsOpen: false,
      modalProfileIsOpen: false,
      collaborator_id: null,
      technologiesSelected: [],
      }
  }

  openModal = () => this.setState({ modalIsOpen: true })
  closeModal = () => this.setState({ modalIsOpen: false,
    name: '',
    description: '',
    image: '',
    repository_url: '',
    collaborator_id: null,
    technologiesSelected: []
  })

  handleChange = e => {
    this.setState({
      editProject:{ ...this.state.editProject,
        [e.currentTarget.name]: e.currentTarget.value
      }
    })
  }
  handleSelect = (e, {value}) => {
    // debugger
    this.setState({technologiesSelected: value})
  }
  handleUserSelection = (e, {value}) => {
    this.setState({ collaborator_id: value })
  }
  handleSubmit = (e, {value}) => {
    // debugger
    // console.log()

    // const {name, description, image, repository_url} = this.state.editProject
    // const editProject = {
    //   name: this.state.name,
    //   description: this.state.description,
    //   image: this.state.image,
    //   repository_url: this.state.repository_url,
    // }
    this.props.updateProject(this.state.editProject, this.props.project.id)
    swal(`Project ${this.state.name} updated!`, "Done!", "success")
    this.closeModal()
  }
  componentDidMount() {
    this.setState({editProject: this.props.project})
  }
  usersOptions = this.props.users.filter(user => user.id !== this.props.currentUser.id).map( user => ({key: user.id, value: user.id, text: user.username}))

  tehcnologyOptions = this.props.technologies.map((technology) => ({
      key: technology.id,
      text: technology.name,
      value: technology.id,
    })
  )
  handleUserSelection = (e, {value}) => {
    this.setState({ collaborator_id: value })
  }
  render(){
    // console.log(this.props.project)
    const {modalIsOpen} = this.state
    const {editProject} = this.state
    return(
      <React.Fragment>
        <Button icon='edit outline' onClick={this.openModal} />
        <Grid centered columns={1}>
        <Modal open={modalIsOpen} onClose={this.closeModal} closeIcon>
          <Modal.Header>Edit Project</Modal.Header>
          <Modal.Content image>
            <Grid centered columns={3}>
                <Image wrapped size='small' src={this.state.image} />
              <Form onSubmit={this.handleSubmit}>
                <Form.Input
                  name='name'
                  placeholder='Project name...'
                  control='input'
                  type='text'
                  onChange={this.handleChange}
                  value={editProject.name}
                />
                <Form.Input
                  name='description'
                  placeholder='Description...'
                  control='input'
                  type='text'
                  onChange={this.handleChange}
                  value={editProject.description}
                />
                <Form.Input
                  name='image'
                  placeholder='Project Logo url...'
                  control='input'
                  type='text'
                  onChange={this.handleChange}
                  value={editProject.image}
                />
                <Form.Input
                  name='repository_url'
                  placeholder='Repository URL...'
                  control='input'
                  type='text'
                  onChange={this.handleChange}
                  value={editProject.repository_url}
                  required
                />
                <Button type='submit'>Update</Button>
              </Form>
            </Grid>
          </Modal.Content>
        </Modal>
        </Grid>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return ({updateProject: (editProject, id) => dispatch(updateProject(editProject, id))})
}
const mapStateToProps = store => ({currentUser: store.currentUser,
users: store.users,
technologies: store.technologies,
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProject))
