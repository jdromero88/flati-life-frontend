import React from 'react'
import Moment from 'moment'
import { Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,} from 'semantic-ui-react'
// import flatiLogo from '../assets/flatilifelogo.jpg'
const currentDate = new Date()
const FooterContent = () => {
  return(
    <React.Fragment>
    <Segment className='footer'  vertical style={{ margin: '5em 0em 0em', padding: '5em 0em', backgroundColor: '#00b3e6'}}>
          <Container textAlign='center'>
            <Grid divided  stackable>
              <Grid.Column width={3}>
                <Header  as='h4' content='Social Media' />
                <List link>
                  <List.Item as='a' target='_blank' href='https://www.facebook.com/FlatironSchool'>Facebook/FlatironSchool</List.Item>
                  <List.Item as='a' target='_blank' href='https://www.twitter.com/flatironschool'>Twitter/FlatironSchool</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header  as='h4' content='More Links' />
                <List link >
                  <List.Item as='a' target='_blank' href='https://medium.com/learn-love-code'>Medium/FlatironSchool</List.Item>
                  <List.Item as='a' target='_blank' href='https://www.quora.com/topic/Flatiron-School'>Quora/FlatironSchool</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header  as='h4' content='Useful links' />
                <List link>
                  <List.Item as='a' target='_blank' href='https://flatironschool.com/'>FlatironSchool.com</List.Item>
                  <List.Item as='a' target='_blank' href='https://flatironschool.com/blog'>FlarironSchool.com/blog</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header as='h4' content='Flati//Life' />
                <p>
                  Social Network for Flatiron Students curating projects and student experiences which aims to help new students survive bootcamp.
                </p>
              </Grid.Column>
            </Grid>
            <Divider section />
            <List horizontal divided link size='small'>
              <List.Item as='a' href='#'>
                Contact Us
              </List.Item>
              <List.Item as='a' href='#'>
                Terms and Conditions
              </List.Item>
              <List.Item as='a' href='#'>
                Privacy Policy
              </List.Item>
            </List>
            <p>FlatiLife © {Moment(currentDate).format('YYYY') }</p>
          </Container>
        </Segment>
    </React.Fragment>
  )
}

export default FooterContent
