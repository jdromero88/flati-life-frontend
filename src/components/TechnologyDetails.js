import React from 'react'
import { Container, Item, Grid, Divider } from 'semantic-ui-react'
const TechnologyDetails = props => {
  // debugger
  const technology = props.technology
  return !technology ? null : (
    <React.Fragment>
        <Container>
        <Divider hidden/>
        <Divider hidden/>
          <Grid className='technology-container'>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header>Name: {technology.name} </Item.Header>
                <Item.Description></Item.Description>
                <Item.Description>
                  <strong>Description: </strong>
                  {technology.description}
                </Item.Description>
                <Item.Description as='a' href={technology.website} target='_blank'>
                <strong>Website: </strong>
                {technology.website}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
          </Grid>
        </Container>
    </React.Fragment>
  )
}
export default TechnologyDetails
