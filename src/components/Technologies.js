import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {createTechnology} from '../redux/actionCreators'
import TechnologiesContainer from '../containers/TechnologiesContainer'
import { Button,
  Divider,
  Modal,
  Image,
  Header,
  Form,
  } from 'semantic-ui-react'
import swal from 'sweetalert'
class Technologies extends React.Component {
  state = {
    name: '',
    description: '',
    website:'',
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
    const newTechnology = {
      name: this.state.name,
      description: this.state.description,
      website: this.state.website
    }
    e.preventDefault()
    this.props.createTechnology(newTechnology)
    swal(`Technology ${this.state.name} created!`, "Done!", "success")
    this.closeModal()
    // this.props.history.push('/technologies')

  }
  render(){
    const {modalIsOpen} = this.state
    return(
      <React.Fragment>
        <Divider hidden/>
        <h2>Technologies List</h2>
        {!this.props.currentUser ? null
          : <Button
            onClick={this.openModal}
            label='Add Technology'
            />
        }
        <Modal open={modalIsOpen} onClose={this.closeModal} closeIcon>
        <Modal.Header>Add Technology</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                name='name'
                placeholder='Technology name...'
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
                name='website'
                placeholder='Website...'
                control='input'
                type='text'
                onChange={this.handleChange}
                required
              />
              <Button type='submit'>Create</Button>
            </Form>

          </Modal.Content>
        </Modal>
        <TechnologiesContainer />
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return({createTechnology: (technology) => dispatch(createTechnology(technology))})
}
const mapStateToProps = store => ({currentUser: store.currentUser})
export default connect(mapStateToProps, mapDispatchToProps)(Technologies)
