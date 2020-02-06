import React from 'react'
import {Card} from 'semantic-ui-react'
const TechnologyCard = props => {
  const technology = props.technology
  return (
    <React.Fragment>
      <Card>
        <Card.Content>
          <Card.Header>{technology.name}</Card.Header>
        </Card.Content>
      </Card>
    </React.Fragment>
  )
}
export default TechnologyCard
