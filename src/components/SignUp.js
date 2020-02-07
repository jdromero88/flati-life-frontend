import React from 'react'
import {connect} from 'react-redux'
import {createUser} from '../redux/actionCreators'
import { Button,
  Checkbox,
  Form,
  Divider,
  Grid,
  Icon } from 'semantic-ui-react'
import swal from 'sweetalert'
const cohortOptions = [
  { key: 'ch2', value: '1', text: 'dc11/14/2019' },
  { key: 'ch1', value: '2', text: 'dc01/24/2020' },
]
const courseName = [
  {key: 'se', value:'Software Engineer', text: 'Software Engineer'},
  {key: 'ds', value:'Data Science', text: 'Data Science'},
]
class SignUp extends React.Component{
  state = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    email: '',
    pronouns: '',
    avatar: 'https://kooledge.com/assets/default_medium_avatar-57d58da4fc778fbd688dcbc4cbc47e14ac79839a9801187e42a796cbd6569847.png',
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

  handleCourseSelection = (e, {value}) => {
    this.setState({ course_name: value })
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
    if(this.props.createUser(newUser)){
      swal(`Welcome ${this.state.username}!`, "You are ready to go!", "success")
      this.closeModal()
    }else {
      swal("Sorry", "Username already taken.", "warning")
    }
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
              required
            />
            <Form.Input
              name='last_name'
              placeholder='Last name...'
              control='input'
              type='text'
              onChange={this.handleChange}
              required
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
              onChange={this.handleCourseSelection}
              options={courseName}
              required
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
              required
            />
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions'/>
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

export default connect(null, mapDispatchToProps)(SignUp)
