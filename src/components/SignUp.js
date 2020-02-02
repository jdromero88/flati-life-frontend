import React from 'react'
import { Button, Checkbox, Form, Divider } from 'semantic-ui-react'

class SignUp extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Divider />
        <Form>
          <Form.Group>
            <Form.Field>
              <label>First Name</label>
              <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder='Last Name' />
            </Form.Field>
            <Form.Input label='Enter Password' type='password' />
          </Form.Group>
          <Form.Field label='Quantity' control='input' type='number' max={5} />
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </React.Fragment>
    )
  }
}
export default SignUp
