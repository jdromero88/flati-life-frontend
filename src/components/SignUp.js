import React from 'react'
import {connect} from 'react-redux'
import {createUser} from '../redux/actionCreators'
import { Button, Checkbox, Form, Divider, Grid, Icon, Dropdown } from 'semantic-ui-react'

const cohortOptions = [
  { key: 'ch2', value: '1', text: 'dc11/14/2019' },
  { key: 'ch1', value: '2', text: 'dc01/24/2020' },
]
const courseName = [
  {key: 'se', value:'se', text: 'Software Engineer'},
  {key: 'ds', value:'ds', text: 'Data Science'},
]
class SignUp extends React.Component{
  state = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    email: '',
    pronouns: '',
    avatar: '',
    bio: '',
    fav_language: '',
    course_name: '',
    current_job: '',
    cohort_id: '',
    before_flatiron: '',
  }

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  handleCohortSelection = (e, {value}) => {
    this.setState({ cohort_id: value })
  }

  handleSubmit = e => {
    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      pronouns: this.state.pronouns,
      avatar: this.state.avatar,
      bio: this.state.bio,
      fav_language: this.state.fav_language,
      course_name: this.state.course_name,
      current_job: this.state.current_job,
      cohort_id: this.state.cohort_id,
      before_flatiron: this.state.before_flatiron,
    }
    e.preventDefault()
    this.props.createUser(newUser)
    // this.props.history.push('/login')
  }


  render(){
    const {value} = this.state
    return(
      <React.Fragment>
        <Divider hidden/>
        <Grid centered columns={1}>
          <Form onSubmit={this.handleSubmit}>
            <Icon name='user circle'size='huge'/>
            <Form.Input
              name='first_name'
              placeholder='First name...'
              control='input'
              type='text'
              onChange={this.handleChange}
            />
            <Form.Input
              name='last_name'
              placeholder='Last name...'
              control='input'
              type='text'
              onChange={this.handleChange}
            />
            <Form.Input
              name='username'
              placeholder='Username...'
              control='input'
              type='text'
              onChange={this.handleChange}
              required
            />
            <Form.Input
              placeholder='Password...'
              name='password'
              type='password'
              onChange={this.handleChange}
              required/>
            <Form.Input placeholder='Avatar url e.g.: http://website.com/img/avatar.jpg' type='text'
            name='avatar'
            onChange={this.handleChange}
            />
            <Form.Input placeholder='Favorite Language e.g.: Ruby, JS' type='text'
            name='fav_language'
            onChange={this.handleChange}
            />
            <Form.Dropdown
              placeholder='Course Name'
              name='course_name'
              fluid
              selection
              onChange={this.handleChange}
              options={courseName}
            />
            <Form.Input
              placeholder='Current job...'
              type='text'
              name='current_job'
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='What you did before Flatiron School...' type='text'
              name='before_flatiron'
              onChange={this.handleChange}
              />
            <Form.Dropdown
              placeholder='Select Cohort'
              fluid
              search
              selection
              name='cohort_id'
              options={cohortOptions}
              onChange={this.handleCohortSelection}
              value={value}
            />
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Create Account</Button>
          </Form>
        </Grid>
      </React.Fragment>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return ({createUser: (user) => dispatch(createUser(user))})
}
const mapStateToProps = store => ({newUser: store.newUser})
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
