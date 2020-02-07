import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'semantic-ui-react'
const TechnologyCard = props => {
  const technology = props.technology
  return (
    <React.Fragment>
      <Card
        as={Link}
        to={`/technologies/${technology.id}`}
      >
        <Card.Content>
          <Card.Header>{technology.name}</Card.Header>
        </Card.Content>
      </Card>
    </React.Fragment>
  )
}
export default TechnologyCard
