import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {createTechnology} from '../redux/actionCreators'
import { Button,
  Checkbox,
  Form,
  Divider,
  Grid,
  Icon,
  Modal,
  Image,
  Header} from 'semantic-ui-react'
class AddTechnology extends React.Component {
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
        <h2>New Technology</h2>

        <Grid centered columns={1}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              name='name'
              placeholder='Technology name...'
              control='input'
              type='text'
              onChange={this.handleChange}
            />
            <Form.Input
              name='description'
              placeholder='Description...'
              control='input'
              type='text'
              onChange={this.handleChange}
            />
            <Form.Input
              name='website'
              placeholder='Website...'
              control='input'
              type='text'
              onChange={this.handleChange}
            />
            <Button type='submit'>Create</Button>
          </Form>
        </Grid>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return({createTechnology: (technology) => dispatch(createTechnology(technology))})
}
// const mapStateToProps = store => ({newTechnology: store.newTechnology})
export default connect(null, mapDispatchToProps)(AddTechnology)
