import React from 'react'
// import { Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Button, Form, Divider, Grid, Icon, Modal, Header, Checkbox } from 'semantic-ui-react'
import {loginUser, createUser} from '../redux/actionCreators'

const courseName = [
  {key: 'se', value:'Software Engineer', text: 'Software Engineer'},
  {key: 'ds', value:'Data Science', text: 'Data Science'},
]

class Login extends React.Component {
  state = {
    username: null,
    password: null,
    modalOpen: false,
    first_name: '',
    last_name: '',
    email: '',
    pronouns: '',
    avatar: 'https://kooledge.com/assets/default_medium_avatar-57d58da4fc778fbd688dcbc4cbc47e14ac79839a9801187e42a796cbd6569847.png',
    bio: '',
    fav_language: '',
    course_name: '',
    current_job: '',
    cohort_id: '',
    before_flatiron: '',
    terms: false,
  }

  handleOpen = (dimmer) => () => this.setState({dimmer, modalOpen: !this.state.modalOpen })
  handleClose = () => {this.setState({ modalOpen: !this.state.modalOpen })
  this.resetSubmitNewUserStates()
  }

  handleChangeCheckbox = () => this.setState({
    terms: !this.state.terms
  })
  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  handleLoginSubmit = e => {
    const userToLogin = {
      username: this.state.username,
      password: this.state.password
    }
    e.preventDefault()
    this.props.loginUser(userToLogin)
    // this.props.history.push('/profile')
  }

  cohortOptions = this.props.cohorts.map(cohort => ({
    key: cohort.id, value: cohort.id, text: cohort.name
  }))

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


  resetSubmitNewUserStates = () => {
    this.setState({
      username:'',
      password:'',
      first_name: '',
      last_name: '',
      email: '',
      pronouns: '',
      avatar: 'https://kooledge.com/assets/default_medium_avatar-57d58da4fc778fbd688dcbc4cbc47e14ac79839a9801187e42a796cbd6569847.png',
      bio: '',
      fav_language: '',
      course_name: '',
      current_job: '',
      cohort_id: '',
      before_flatiron: '',
    })
  }
  handleSignupSubmit = e => {
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
    this.handleClose()
    this.props.createUser(newUser)
    this.resetSubmitNewUserStates()
  }

  render() {
    const {modalOpen, dimmer, value} = this.state
    return(
      <React.Fragment>
        <Divider hidden/>
         <Grid centered columns={1}>
          <Form onSubmit={this.handleLoginSubmit}>
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
              <Button
                disabled={this.state.username && this.state.password ? false : true}
                type='submit'
              >Login</Button>


            <Divider />

              <Button onClick={this.handleOpen('blurring')} type='button'>Create a new account</Button>
          </Form>
        </Grid>
        <Modal dimmer={dimmer} open={modalOpen} onClose={this.handleClose} closeIcon
          basic
          size='small'
        >
          <Header icon='user circle' content='User Information' centered='true'/>
          <Modal.Content>
          <Form onSubmit={this.handleSignupSubmit}>
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
              name='email'
              placeholder='Email'
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
              options={this.cohortOptions}
              onChange={this.handleCohortSelection}
              value={value}
              required
            />
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions'
              checked={this.state.terms}
              onChange={this.handleChangeCheckbox}
              />
            </Form.Field>
            <Button type='submit'
            disabled={this.state.terms ? false : true}
            >Create Account</Button>
          </Form>
          </Modal.Content>
        </Modal>
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
const mapDispatchToProps = dispatch => ({loginUser: (user) => dispatch(loginUser(user)),
createUser: (user) => {dispatch(createUser(user))}
})

const mapStateToProps = store => ({currentUser: store.currentUser,
  cohorts: store.cohorts,
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
