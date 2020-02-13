import React from 'react'
import ProjectsContainer from '../containers/ProjectsContainer'
import Login from './Login'
import HomeWelcome from './HomeWelcome'
import {Container, Divider, Header, Segment, Grid, Item} from 'semantic-ui-react'
import {connect} from 'react-redux'
const Home = props => {
  const home = true
  return(
    <React.Fragment>
      <Divider hidden />
      <Container>
        <Grid>
          <Grid.Column width={7} >
            {!props.currentUser ?


            <Header as='h2' attached='top' className='container-transparent'>
            Welcome to <span className='logo'>FLATI//LIFE</span>!
            </Header>
            : null
            }
            <Segment className='container-transparent'>
            {!props.currentUser ?
              <Item>
                <Item.Group>
                  <Item.Content>
                    <Item.Header>
                    <strong>This is a space to link up with Flatiron students new and old.</strong>
                    </Item.Header>
                    <Item.Description>
                    - Connect with current students and alumni to expand your network.
                    </Item.Description>
                    <Item.Description>
                    - Exhibit your projects and see what others are working on.
                    </Item.Description>
                    <Item.Description>
                    - Give feedback, share ideas and provide moral support.
                    </Item.Description>
                  </Item.Content>
                </Item.Group>
              </Item>
              : null
              }
              <Header as='h2'>Recents Projects</Header>
              <ProjectsContainer home={home}/>
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment className='container-transparent login-form'>
              { props.currentUser ? <HomeWelcome currentUser={props.currentUser}/>
                :<Login />

              }
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </React.Fragment>
  )
}
const mapStateToProps = store => ({currentUser: store.currentUser})
export default connect(mapStateToProps)(Home)
