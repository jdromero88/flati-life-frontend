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
  Grid
  } from 'semantic-ui-react'
class Technologies extends React.Component {
  state = {
    name: '',
    description: '',
    website:'',
  }
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
    // this.props.history.push('/technologies')
    // debugger
    return <Redirect to='/technologies' />
  }
  render(){
    return(
      <React.Fragment>
        <Divider hidden/>
        <h2>Technologies List</h2>
        <Modal trigger={!this.props.currentUser ? null :<Button label='Add Technology'/>}>
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

// <Button
//   as={Link}
//   to={'/add-technology'}
//   label='Add Technology'
// />
