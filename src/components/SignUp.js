import React from 'react'
import { Button, Checkbox, Form, Divider, Grid, Icon, Dropdown } from 'semantic-ui-react'

const cohortOptions = [
  { key: 'ch2', value: 'ch2', text: 'dc11/14/2019' },
  { key: 'ch1', value: 'ch1', text: 'dc01/24/2020' },
]
const courseName = [
  {key: 'se', value:'se', text: 'Software Engineer'},
  {key: 'ds', value:'ds', text: 'Data Science'},
]
class SignUp extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Divider hidden/>
        <Grid centered columns={1}>
          <Form>
            <Icon name='user circle'size='huge'/>
            <Form.Input
              name='first_name'
              placeholder='First name...'
              control='input'
              type='text'
              onChange={null}
            />
            <Form.Input
              name='last_name'
              placeholder='Last name...'
              control='input'
              type='text'
              onChange={null}
            />
            <Form.Input
              name='username'
              placeholder='Username...'
              control='input'
              type='text'
              onChange={this.handleChange}
            />
            <Form.Input placeholder='Password...' type='password' />
            <Form.Input placeholder='Avatar url e.g.: http://website.com/img/avatar.jpg' type='text' />
            <Form.Input placeholder='Favorite Language e.g.: Ruby, JS' type='text' />
            <Form.Dropdown
              placeholder='Course Name'
              fluid
              selection
              options={courseName}
            />
            <Form.Input placeholder='Current job...' type='text' />
            <Form.Input placeholder='What you did before Flatiron School...' type='text' />
            <Form.Dropdown
              placeholder='Select Cohort'
              fluid
              search
              selection
              options={cohortOptions}
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
export default SignUp
