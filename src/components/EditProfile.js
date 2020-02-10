import React from 'react'
import {connect} from 'react-redux'
import {Modal,
Form, Button,
Image, Menu} from 'semantic-ui-react'
import { FaUserEdit } from 'react-icons/fa'
import {createProject} from '../redux/actionCreators'

const courseName = [
  {key: 'se', value:'Software Engineer', text: 'Software Engineer'},
  {key: 'ds', value:'Data Science', text: 'Data Science'},
]
class EditProfile extends React.Component {
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
      modalOpen: false,
  }

  openModal = () => this.setState({ modalOpen: !this.state.modalOpen })
  closeModal = () => this.setState({ modalOpen: !this.state.modalOpen })
  handleProfileChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  handleLoginSubmit = e => {
    const{first_name, last_name, username, password, email, pronouns,
    avatar, bio, fav_language, course_name,
    current_job, cohort_id,before_flatiron
    } = this.state
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
      before_flatiron: before_flatiron,
    }
    e.preventDefault()
    this.props.updateUser(user)
    this.closeModal()
  }
  render(){
    const { modalOpen, value} = this.state
    return(
      <React.Fragment>
      <Menu.Item
        name='gamepad'
        title="Edit Profile"
        onClick={this.openModal}
      >
        <FaUserEdit size={27}/>
      User
      </Menu.Item>
      <Modal open={modalOpen} onClose={this.closeModal} closeIcon>
        <Modal.Header>Edit Profile</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='small' src={this.state.image} />
          <Form onSubmit={this.handleEditProfileSubmit}>
          <Form.Input
            name='first_name'
            placeholder='First name...'
            control='input'
            type='text'
            onChange={this.handleProfileChange}
            required
          />
          <Form.Input
            name='last_name'
            placeholder='Last name...'
            control='input'
            type='text'
            onChange={this.handleProfileChange}
            required
          />
          <Form.Input
            name='email'
            placeholder='Email'
            control='input'
            type='text'
            onChange={this.handleProfileChange}
            required
          />
          <Form.Input
            name='username'
            placeholder='Username...'
            control='input'
            type='text'
            onChange={this.handleProfileChange}
            required
          />
          <Form.Input
            placeholder='Password...'
            name='password'
            type='password'
            onChange={this.handleProfileChange}
            required/>
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
            required
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
            required
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
  return ({createProject: (project, currentUser, collaborator, technologies) => dispatch(createProject(project, currentUser, collaborator, technologies ))})
}
const mapStateToProps = store => ({currentUser: store.currentUser,
users: store.users,
projects: store.projects,
technologies: store.technologies,
cohorts: store.cohorts,
})
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
