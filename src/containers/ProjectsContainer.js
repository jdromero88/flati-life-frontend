import React from 'react'
import {connect} from 'react-redux'
import {Card, Divider} from 'semantic-ui-react'
import ProjectCard from '../components/ProjectCard'
import SearchBar from '../components/SearchBar'

const ProjectsContainer = props => {
  return(
    <React.Fragment>
      <SearchBar />
      <Divider />
      <Card.Group itemsPerRow={3} fluid='true'>
        { props.home ?
          props.projects.map(project =>
            <ProjectCard
            key={project.id}
            project={project}
            />
          ).slice(0,10)
          :
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

const mapStateToProps = store => ({projects: store.projects.filter(project => project.name.toLowerCase().includes(store.searchText.toLowerCase()))

})
export default connect(mapStateToProps)(ProjectsContainer)
