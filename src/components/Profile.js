import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {createProject} from '../redux/actionCreators'
import {Container, Modal,
Form, Button,
Image, Divider,
Icon, Menu,} from 'semantic-ui-react'
import swal from 'sweetalert'

class Profile extends React.Component {
  state = {
    name: '',
    description: '',
    image: '',
    repository_url: '',
    modalIsOpen: false,
    modalProfileIsOpen: false,
    user_id: null,
  }

  openModal = () => this.setState({ modalIsOpen: true })
  closeModal = () => this.setState({ modalIsOpen: false })
  openModalProfile = () => this.setState({ modalProfileIsOpen: true })
  closeModalProfile = () => this.setState({ modalProfileIsOpen: false })

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  handleSubmit = e => {
    const newProject = {
      name: this.state.name,
      description: this.state.description,
      image: this.state.image,
      repository_url: this.state.repository_url,
    }
    this.props.createProject(newProject, this.props.currentUser)
    swal(`Project ${this.state.name} created!`, "Done!", "success")
    this.closeModal()
  }

  usersOptions = this.props.users.filter(user => user.id !== this.props.currentUser.id).map( user => ({key: user.id, value: user.username, text: user.username}))
  handleUserSelection = (e, {value}) => {
    this.setState({ user_id: value })
  }

  render(){
    const {modalIsOpen, modalProfileIsOpen, userValue} = this.state
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
                name='user_id'
                options={this.usersOptions}
                onChange={this.handleUserSelection}
                value={userValue}
                required
              />
              <Button type='submit'>Create</Button>
            </Form>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return ({createProject: (project, currentUser) => dispatch(createProject(project, currentUser))})
}
const mapStateToProps = store => ({currentUser: store.currentUser,
users: store.users})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))
