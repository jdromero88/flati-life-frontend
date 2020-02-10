import React from 'react'
import {connect} from 'react-redux'
import {Modal,
Form, Button,
Image, Icon} from 'semantic-ui-react'
import {updateUser} from '../redux/actionCreators'

const courseName = [
  {key: 'se', value:'Software Engineer', text: 'Software Engineer'},
  {key: 'ds', value:'Data Science', text: 'Data Science'},
]
class EditProfile extends React.Component {
  state = {
      editUser:{
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
      },
      modalOpen: false,
  }
  componentDidMount() {
    this.setState({editUser: this.props.currentUser})
  }
  openModal = () => this.setState({ modalOpen: !this.state.modalOpen })
  closeModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen })
  }
  handleProfileChange = e => {
    this.setState({
      editUser: { ...this.state.editUser,
        [e.currentTarget.name]: e.currentTarget.value
      }
    })
  }

  handleCohortSelection = (e, {value}) => {
    this.setState({ editUser: {
        ...this.state.editUser,
        cohort_id: value
    } })
  }

  handleCourseSelection = (e, {value}) => {
    this.setState({ editUser: {
      ...this.state.editUser,
      course_name: value
    } })
  }

  resetStateForEditUser = () => {
    this.setState({currentUser:{}})
  }

  cohortOptions = this.props.cohorts.map(cohort => ({
    key: cohort.id, value: cohort.id, text: cohort.name
  }))

  handleSubmit = e => {
    const{id, first_name, last_name, username, password, email, pronouns,
    avatar, bio, fav_language, course_name,
    current_job, cohort_id,before_flatiron
  } = this.state.editUser
    const user = {
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: password,
      email: email,
      pronouns: pronouns,
      avatar: avatar,
      bio: bio,
      fav_language: fav_language,
      course_name: course_name,
      current_job: current_job,
      cohort_id: cohort_id,
      before_flatiron: before_flatiron
    }

    e.preventDefault()
    this.props.updateUser(user, id)
    this.closeModal()
  }
  render(){
    const { modalOpen, value} = this.state
    return(
      <React.Fragment>
      <Button animated onClick={this.openModal}>
        <Button.Content visible>Edit</Button.Content>
        <Button.Content hidden>
          <Icon name='edit outline'/>
        </Button.Content>
      </Button>
      <Modal open={modalOpen} onClose={this.closeModal} closeIcon>
        <Modal.Header>Edit Profile</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='small' src={this.state.image} />
          <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name='first_name'
            placeholder='First name...'
            control='input'
            type='text'
            onChange={this.handleProfileChange}
          />
          <Form.Input
            name='last_name'
            placeholder='Last name...'
            control='input'
            type='text'
            onChange={this.handleProfileChange}
          />
          <Form.Input
            name='pronouns'
            placeholder='Pronouns e.g.: She|Her...'
            control='input'
            type='text'
            onChange={this.handleProfileChange}
          />
          <Form.Input
            name='email'
            placeholder='Email'
            control='input'
            type='text'
            onChange={this.handleProfileChange}
          />
          <Form.Input
            name='username'
            placeholder='Username...'
            control='input'
            type='text'
            onChange={this.handleProfileChange}
          />
          <Form.Input
            placeholder='Password...'
            name='password'
            type='password'
            onChange={this.handleProfileChange}
            />
          <Form.Input placeholder='Avatar url e.g.: http://website.com/img/avatar.jpg' type='text'
          name='avatar'
          onChange={this.handleProfileChange}
          />
          <Form.Input placeholder='Favorite Language e.g.: Ruby, JS' type='text'
          name='fav_language'
          onChange={this.handleProfileChange}
          />
          <Form.Dropdown
            placeholder='Course Name'
            name='course_name'
            fluid
            selection
            onChange={this.handleCourseSelection}
            options={courseName}
          />
          <Form.Input
            placeholder='Current job...'
            type='text'
            name='current_job'
            onChange={this.handleProfileChange}
          />
          <Form.Input
            placeholder='What you did before Flatiron School...' type='text'
            name='before_flatiron'
            onChange={this.handleProfileChange}
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
          />
          <Button type='submit'
          disabled={this.state.username !== '' ? false : true}
          >Update Account</Button>
          </Form>
        </Modal.Content>
      </Modal>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return ({updateUser: (user, id) => dispatch(updateUser(user, id ))})
}
const mapStateToProps = store => ({
cohorts: store.cohorts,
})
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
