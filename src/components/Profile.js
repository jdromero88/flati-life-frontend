import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {createProject} from '../redux/actionCreators'
import {Container, Modal,
Form, Button,
Image, Divider,
Icon, Menu, Grid} from 'semantic-ui-react'
import swal from 'sweetalert'
class Profile extends React.Component {
  state = {
    name: '',
    description: '',
    image: '',
    repository_url: '',
    modalIsOpen: false,
    modalProfileIsOpen: false,
    collaborator_id: null,
    technologiesSelected: [],
    inputLinkClicked: false
  }

  openModal = () => this.setState({ modalIsOpen: true })
  closeModal = () => this.setState({ modalIsOpen: false,
    name: '',
    description: '',
    image: '',
    repository_url: '',
    collaborator_id: null,
    technologiesSelected: [],
    inputLinkClicked: false
  })
  openModalProfile = () => this.setState({ modalProfileIsOpen: true })
  closeModalProfile = () => this.setState({ modalProfileIsOpen: false })

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  handleSelect = (e, data) => {
    const value = parseInt(data.value)
    if(this.state.technologiesSelected.length !== 0){
      const foundIndex = this.state.technologiesSelected.findIndex(arr => arr === value)
      if(foundIndex !== -1){
        swal({
          text:'Technology already added.',
          icon:'warning'
        })
      }else{
        this.setState({technologiesSelected: [...this.state.technologiesSelected, data.value].flat(),
          inputLinkClicked: true})
        }
    }else {
      this.setState({technologiesSelected: [...this.state.technologiesSelected, data.value].flat(),
        inputLinkClicked: true})
    }


  }
  handleUserSelection = (e, {value}) => {
    this.setState({ collaborator_id: value })
  }
  handleSubmit = e => {
    const newProject = {
      name: this.state.name,
      description: this.state.description,
      image: this.state.image,
      repository_url: this.state.repository_url,
    }
    this.props.createProject(newProject, this.props.currentUser.id, this.state.collaborator_id, this.state.technologiesSelected)
    swal(`Project ${this.state.name} created!`, "Done!", "success")
    this.setState({
      name: '',
      description: '',
      image: '',
      repository_url: '',
      modalIsOpen: false,
      modalProfileIsOpen: false,
      collaborator_id: null,
      technologiesSelected: [],
      inputLinkClicked: false
    })
    this.closeModal()
  }

  usersOptions = this.props.users.filter(user => user.id !== this.props.currentUser.id).map( user => ({key: user.id, value: user.id, text: user.username}))

  tehcnologyOptions = this.props.technologies.map((technology, index) => ({
      key: technology.id,
      text: technology.name,
      value: technology.id,
    })
  )
  handleUserSelection = (e, {value}) => {
    this.setState({ collaborator_id: value })
  }

  userProjects = () => {
    this.props.projects.map(project => project.users.filter(user => user.id === this.props.currentUser.id))
  }

  render(){
    const {modalIsOpen, modalProfileIsOpen, value, data=[]} = this.state
    return !this.props.currentUser ? null : (
      <React.Fragment>
        <Container>
          <Divider hidden/>
          <Menu icon='labeled'>
            <Menu.Item
              name='gamepad'
              onClick={this.openModal}
            >
            <Icon name='add circle' />
            Project
            </Menu.Item>
            <Menu.Item
              name='gamepad'
              onClick={this.openModalProfile}
            >
            <Icon name='edit outline' />
            User
            </Menu.Item>
          </Menu>

          <Image src={this.props.currentUser.avatar} size='small' />
          <h1>Name: {this.props.currentUser.username}</h1>
          <h2>All users details goes here</h2>


        </Container>

        {/*Modal to edit Profile*/}
        <Modal open={modalProfileIsOpen} onClose={this.closeModalProfile} closeIcon>
          <Modal.Header>Edit Profile</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='small' src={this.state.image} />
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                name='name'
                placeholder='Project name...'
                control='input'
                type='text'
                onChange={this.handleChange}
                required
              />
              <Form.Input
                name='description'
                placeholder='Description...'
                control='input'
                type='text'
                onChange={this.handleChange}
                required
              />
              <Form.Input
                name='image'
                placeholder='Project Logo url...'
                control='input'
                type='text'
                onChange={this.handleChange}
                required
              />
              <Form.Input
                name='repository_url'
                placeholder='Repository URL...'
                control='input'
                type='text'
                onChange={this.handleChange}
                required
              />
              <Button type='submit'>Update</Button>
            </Form>
          </Modal.Content>
        </Modal>
        {/*Modal to add Project*/}
        <Modal open={modalIsOpen} onClose={this.closeModal} closeIcon>
          <Modal.Header>Create Project</Modal.Header>
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
                  required
                />
                <Form.Input
                  name='description'
                  placeholder='Description...'
                  control='input'
                  type='text'
                  onChange={this.handleChange}
                  required
                />
                <Form.Input
                  name='image'
                  placeholder='Project Logo url...'
                  control='input'
                  type='text'
                  onChange={this.handleChange}
                  required
                />
                <Form.Input
                  name='repository_url'
                  placeholder='Repository URL...'
                  control='input'
                  type='text'
                  onChange={this.handleChange}
                  required
                />
                <Form.Dropdown
                  placeholder='Select User'
                  fluid
                  search
                  selection
                  name='collaborator_id'
                  options={this.usersOptions}
                  onChange={this.handleUserSelection}
                  value={value}
                  required
                />
                <Form.Dropdown
                  placeholder='Technologies'
                  name='technologiesSelected'
                  fluid multiple selection search
                  options={this.tehcnologyOptions}
                  onChange={this.handleSelect}
                  value={data}
                  required
                />
                <Button type='submit'>Create</Button>
              </Form>
            </Grid>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return ({createProject: (project, currentUser, collaborator, technologies) => dispatch(createProject(project, currentUser, collaborator, technologies ))})
}
const mapStateToProps = store => ({currentUser: store.currentUser,
users: store.users,
projects: store.projects,
technologies: store.technologies,
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))
