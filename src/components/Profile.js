import React from 'react'
import {connect} from 'react-redux'
import {Container, Modal,
Form, Button} from 'semantic-ui-react'

class Profile extends React.Component {
  render(){
    return !this.props.currentUser ? null : (
      <React.Fragment>
        <Container>
          <h1>Name: {this.props.currentUser.username}</h1>
          <h2>All users details goes here</h2>
          <Modal trigger={!this.props.currentUser ? null :<Button label='Add Project'/>}>
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
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = store => ({currentUser: store.currentUser})
export default connect(mapStateToProps, null)(Profile)
