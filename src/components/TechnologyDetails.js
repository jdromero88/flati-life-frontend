import React from 'react'
import { Container, Image, List } from 'semantic-ui-react'
const TechnologyDetails = props => {
  debugger
  const technology = props.technology
  return !technology ? null : (
    <React.Fragment>
        <Container>
          <h1>Project Name: {technology.name}</h1>
          <h2>Description:</h2>
          <p>{technology.description}</p>
          <h2>website:</h2>
          <List>
          <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <a href={technology.website} target='_blank'>{technology.website}</a>
            </List.Content>
          </List.Item>
          </List>
        </Container>
    </React.Fragment>
  )
}
export default TechnologyDetails
