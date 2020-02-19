import React from 'react'
import { Container, Image, List, Divider, Grid, Item, Label } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
const ProjectDetails = props => {
  // debugger
  const project = props.project
  return !project ? null : (
    <React.Fragment>
        <Container>
        <Divider hidden/>
        <Divider hidden/>
          <Grid className='technology-container'>
          <Image
          floated='left'
          size='medium'
          src={project.image}
          />
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header>Name: {project.name} </Item.Header>
                <Item.Description>
                  <strong>Description: </strong>
                  {project.description}
                </Item.Description>
                <Item.Description as='a' href={project.repository_url} target='_blank'>
                <strong>Repository: </strong>
                {project.repository_url}
                </Item.Description>
                <Item.Description><strong>Developers:</strong></Item.Description>
                <List>
                {
                  project.users.map(projectUsers =>
                    <List.Item>
                      <List.Content>
                        <List.Header as={!props.currentUser ? null : Link} to={`/students/${projectUsers.id}`}>{projectUsers.username}</List.Header>
                      </List.Content>
                    </List.Item>
                  )
                }
                </List>
                {
                  project.tech_specifications.map(projectSpecifications => <Label content={projectSpecifications.name}/>)
                }
              </Item.Content>
            </Item>
          </Item.Group>
          </Grid>
        </Container>
    </React.Fragment>
  )
}
const mapStateToProps = store => ({currentUser: store.currentUser})
export default connect(mapStateToProps, null)(ProjectDetails)
