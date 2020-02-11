import React from 'react'
import {connect} from 'react-redux'
import { withRouter} from 'react-router-dom'
import {createProject} from '../redux/actionCreators'
import { Modal,
Form, Button,
Image, Icon,
Grid, } from 'semantic-ui-react'
import swal from 'sweetalert'
class AddProject extends React.Component {
  state = {
    name: '',
    description: '',
    image: '',
    repository_url: '',
    modalIsOpen: false,
    modalProfileIsOpen: false,
    collaborator_id: null,
    technologiesSelected: [],
    inputLinkClicked: false,
  }

  openModal = () => this.setState({ modalIsOpen: true })
  closeModal = () => this.setState({ modalIsOpen: false,
    name: '',
    description: '',
    image: '',
    repository_url: '',
    collaborator_id: null,
    technologiesSelected: [],
    inputLinkClicked: false
  })

  cohortOptions = this.props.cohorts.map(cohort => ({
    key: cohort.id, value: cohort.id, text: cohort.name
  }))

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  handleSelect = (e, {value}) => {
    // debugger
    this.setState({technologiesSelected: value})
    // const test = parseInt(value)
    // console.log(e.target.innerText, 'data is:', data)

    // console.log(data.options.filter(q => q.text === e.target.innerText).map(v => v.text).toString())


    // console.log(data.options.filter(q => {
    //   // debugger
    //   return q.value === value}).map(v => v.text).toString())
    // if(this.state.technologiesSelected.length !== 0){
    //   const foundIndex = this.state.technologiesSelected.findIndex(arr => arr === value)
    //   if(foundIndex !== -1){
    //     swal({
    //       text:'Technology already added.',
    //       icon:'warning'
    //     })
    //   }else{
    //     this.setState({technologiesSelected: [...this.state.technologiesSelected, data.value].flat(),
    //       inputLinkClicked: true})
    //     }
    // }else {
    //   this.setState({technologiesSelected: [...this.state.technologiesSelected, data.value].flat(),
    //     inputLinkClicked: true})
    // }
  }
  handleUserSelection = (e, {value}) => {
    this.setState({ collaborator_id: value })
  }
  handleSubmit = (e, {value}) => {
    debugger
    const newProject = {
      name: this.state.name,
      description: this.state.description,
      image: this.state.image,
      repository_url: this.state.repository_url,
    }
    this.props.createProject(newProject, this.props.currentUser.id, this.state.collaborator_id, this.state.technologiesSelected)
    swal(`Project ${this.state.name} created!`, "Done!", "success")
    this.setState({
      name: '',
      description: '',
      image: '',
      repository_url: '',
      modalIsOpen: false,
      modalProfileIsOpen: false,
      collaborator_id: null,
      technologiesSelected: [],
      inputLinkClicked: false
    })
    this.closeModal()
  }

  usersOptions = this.props.users.filter(user => user.id !== this.props.currentUser.id).map( user => ({key: user.id, value: user.id, text: user.username}))

  tehcnologyOptions = this.props.technologies.map((technology) => ({
      key: technology.id,
      text: technology.name,
      value: technology.id,
    })
  )
  handleUserSelection = (e, {value}) => {
    this.setState({ collaborator_id: value })
  }
  render(){
    const {modalIsOpen, value, data=[]} = this.state
    return(
      <React.Fragment>
        <Button animated onClick={this.openModal}>
        <Button.Content visible>
          Create Project
        </Button.Content>
        <Button.Content hidden>
          <Icon name='add circle'/>
        </Button.Content>
        </Button>
        <Grid centered columns={1}>
        <Modal open={modalIsOpen} onClose={this.closeModal} closeIcon>
          <Modal.Header>Create Project</Modal.Header>
          <Modal.Content image>
            <Grid centered columns={3}>
                <Image wrapped size='small' src={this.state.image} />
              <Form onSubmit={this.handleSubmit}>
                <Form.Input
                  name='name'
                  placeholder='Project name...'
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
                  name='image'
                  placeholder='Project Logo url...'
                  control='input'
                  type='text'
                  onChange={this.handleChange}
                  required
                />
                <Form.Input
                  name='repository_url'
                  placeholder='Repository URL...'
                  control='input'
                  type='text'
                  onChange={this.handleChange}
                  required
                />
                <Form.Dropdown
                  placeholder='Select User'
                  fluid
                  search
                  selection
                  name='collaborator_id'
                  options={this.usersOptions}
                  onChange={this.handleUserSelection}
                  value={value}
                  required
                />
                <Form.Dropdown
                  placeholder='Technologies'
                  name='technologiesSelected'
                  fluid multiple selection search
                  options={this.tehcnologyOptions}
                  onChange={this.handleSelect}
                  // value={data}
                  data={data}

                  required
                />
                <Button type='submit'>Create</Button>
              </Form>
            </Grid>
          </Modal.Content>
        </Modal>
        </Grid>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddProject))
