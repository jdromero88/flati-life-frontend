import React, {Component} from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import { Container } from "semantic-ui-react"
import {connect} from 'react-redux'
import {fetchingUsers} from './redux/actionCreators'
import './App.css'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import Students from './components/Students'
import Resources from './components/Resources'
import Technologies from './components/Technologies'
import SignUp from './components/SignUp'
import Login from './components/Login'

class App extends Component {
  componentDidMount() {
    this.props.fetchingUsers()
  }

  render(){
    return (
      <div>
        <Header />
        <Container>
          <Switch>
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/technologies' component={Technologies} />
            <Route exact path='/resources' component={Resources} />
            <Route exact path='/students' component={Students} />
            <Route exact path='/projects' component={Projects} />
            <Route path='/' component={Home} />
          </Switch>
        </Container>
        <Footer />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchingUsers: () => {dispatch(fetchingUsers())}
})

export default withRouter(connect(null, mapDispatchToProps)(App))
