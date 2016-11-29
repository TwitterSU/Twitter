import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import './App.css'
import Login from '../Login/Login'
import Registration from '../Registration/Registration'
import Main from '../Main/Main'
import User from '../User/User'
import Twitter from '../Twitter/Twitter'
import NotFound from '../NotFound/NotFound'
let checkLoggedIn = () => {
  let user = sessionStorage.getItem('username')
  if (!user) {
    browserHistory.push('/')
  } else {
    return true
  }
}

class App extends Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Login} />
        <Route path='/registration' component={Registration} />
        <Route path='twitter' component={Twitter} onEnter={checkLoggedIn}>
          <IndexRoute component={User} />
        </Route>
        <Route path='*' component={NotFound} />
      </Router>
    )
  }

}

export default App
