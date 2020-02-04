import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Card} from 'semantic-ui-react'
import ProjectCard from '../components/ProjectCard'

const ProjectsContainer = props => {
  return(
    <React.Fragment>
      <Card.Group itemsPerRow={3} fluid>
        {
          props.projects.map(project =>
            <ProjectCard
            key={project.id}
            project={project}
            />
          )
        }
      </Card.Group>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return{
    projects: state.projects
  }
}

export default connect(mapStateToProps)(ProjectsContainer)
