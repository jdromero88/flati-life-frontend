import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {createProject} from '../redux/actionCreators'
import {Container, Modal,
Form, Button,
Image, Divider, } from 'semantic-ui-react'
import swal from 'sweetalert'

class Profile extends React.Component {
  state = {
    name: '',
    description: '',
    image: '',
    repository_url: '',
    modalIsOpen: false
  }

  openModal = () => this.setState({ modalIsOpen: true })
  closeModal = () => this.setState({ modalIsOpen: false })

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
    this.props.createProject(newProject)
    swal(`Technology ${this.state.name} created!`, "Done!", "success")
    this.closeModal()
  }
  render(){
    const {modalIsOpen} = this.state
    return !this.props.currentUser ? null : (
      <React.Fragment>
        <Container>
          <Divider hidden/>
          <Button label='Add Project' onClick={this.openModal}/>
          <Image src={this.props.currentUser.avatar} size='small' />
          <h1>Name: {this.props.currentUser.username}</h1>
          <h2>All users details goes here</h2>
          <Modal open={modalIsOpen} onClose={this.closeModal} closeIcon>
            <Modal.Header>Create Project</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
              <Modal.Description>
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
                <Button type='submit'>Create</Button>
              </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Container>
      </React.Fragment>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return ({createProject: (project) => dispatch(createProject(project))})
}
const mapStateToProps = store => ({currentUser: store.currentUser})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))
