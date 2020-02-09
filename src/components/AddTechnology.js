import React from 'react'
import {connect} from 'react-redux'
import { withRouter} from 'react-router-dom'
import {createTechnology} from '../redux/actionCreators'
import { Button,
  Form,
  Divider,
  Grid,
  } from 'semantic-ui-react'
  import swal from 'sweetalert'
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
    // const t = this
    // debugger
    swal(`Technology ${this.state.name} created!`, "Done!", "success")
    this.props.history.push('/technologies')
    // return <Redirect to='/technologies' />
  }

  // doSomething = () => {
  //   alert('you click me')
  //   return <Redirect to='/technologies' />
  // }

  render(){
    return(
      <React.Fragment>
        <Divider hidden/>
        <h2>New Technology</h2>
        {/*<Button onClick={this.doSomething} label='button'/>*/}
        <Grid centered columns={1}>
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
        </Grid>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return({createTechnology: (technology) => dispatch(createTechnology(technology))})
}
// const mapStateToProps = store => ({newTechnology: store.newTechnology})
export default withRouter(connect(null, mapDispatchToProps)(AddTechnology))
