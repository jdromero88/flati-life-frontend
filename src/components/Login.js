import React from 'react'
import { Link, Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { Button, Form, Divider, Grid, Icon } from 'semantic-ui-react'

class Login extends React.Component {
  state = {
    username: null,
    password: null
  }

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  handleSubmit = e => {
    console.log(this.state.username, this.state.password)
    const username = this.state.username
    const password = this.state.password
    e.preventDefault()
  }

  render() {
    return(
      <React.Fragment>
        <Divider hidden/>
         <Grid centered columns={1}>
          <Form onSubmit={this.handleSubmit}>
              <Icon name='user circle'size='huge'/>
              <Form.Input
                name='username'
                label='Username:'
                placeholder='Username...'
                control='input'
                type='text'
                onChange={this.handleChange}
              />
              <Form.Input
                name='password'
                label='Password'
                type='password'
                placeholder='Password...'
                onChange={this.handleChange}
              />


              { this.state.username && this.state.password
                ? <Button
                  type='submit'
                  >Login</Button>
                : <Button
                  disabled
                  type='submit'
                >Login</Button>
              }

            <Divider />
            <Link to='/signup'>
              <Button type='button'>Create a new account</Button>
            </Link>
          </Form>
        </Grid>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
      </React.Fragment>
    )
  }
}

export default Login
