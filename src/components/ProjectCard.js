import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Image} from 'semantic-ui-react'
const defaultProjectAvatar = 'https://mpng.pngfly.com/20190306/urk/kisspng-computer-icons-portable-network-graphics-clip-art-intention-registration-svg-png-icon-free-download-5c800dc7bcb986.426545291551896007773.jpg'
const ProjectCard = props => {
  const project = props.project
  return(
    <React.Fragment>
      <Card
      as={Link}
      to={`/projects/${props.project.id}`}
      >
        <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={project.avatar ? project.avatar :defaultProjectAvatar}
        />
        <Card.Header>{project.name}</Card.Header>
        <Card.Description>
          {project.description}
        </Card.Description>
        <Card.Meta>
          Repository: <a href={project.repository_url}>{project.repository_url}</a>
        </Card.Meta>
        </Card.Content>
      </Card>
    </React.Fragment>
  )
}
export default ProjectCard
