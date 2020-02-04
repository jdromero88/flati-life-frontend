import React, {Component} from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import { Container } from "semantic-ui-react"
import {connect} from 'react-redux'
import {
  fetchingUsers,
  fetchingProjects
} from './redux/actionCreators'
import './App.css'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'
import Students from './components/Students'
import Resources from './components/Resources'
import Technologies from './components/Technologies'
import SignUp from './components/SignUp'
import Login from './components/Login'

class App extends Component {
  componentDidMount() {
    this.props.fetchingUsers()
    this.props.fetchingProjects()
  }

  render(){
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Switch>
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/technologies' component={Technologies} />
            <Route exact path='/resources' component={Resources} />
            <Route exact path='/students' component={Students} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/' component={Home} />

            <Route exact path ='/projects/:id' render={() => {
              console.log(this)
              const projectID = parseInt(window.location.href.split('/').pop())
              // const projectID = this.props.match.params.id
              console.log('project id in app',projectID)
              const currentProject = this.props.projects.find(project => project.id === projectID)
              return <ProjectDetails project={currentProject} />
            }} />
          </Switch>
        </Container>
        <Footer />
      </React.Fragment>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchingUsers: () => {dispatch(fetchingUsers())},
  fetchingProjects: () => {dispatch(fetchingProjects())}
})

const mapStateToProps = state => ({projects: state.projects})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
