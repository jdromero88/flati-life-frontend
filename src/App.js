import React, {Component} from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import { Container } from "semantic-ui-react"
import {connect} from 'react-redux'
import {fetchingUsers} from './redux/actionCreators'
import './App.css'
import Header from './containers/header'

class App extends Component {
  componentDidMount() {
    this.props.fetchingUsers()
  }

  render(){
    return (
      <div>
        <Header />
        <Container>

        </Container>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchingUsers: () => {dispatch(fetchingUsers())}
})


export default withRouter(connect(null, mapDispatchToProps)(App))
