import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import './App.css'
import Login from '../Login/Login'
import Registration from '../Registration/Registration'
import Main from '../Main/Main'
import User from '../User/User'
import Content from '../Content/Content'
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
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Login} />
        </Route>
        <Route path='/registration' component={Registration} />
        <Route path='twitter' component={Content} onEnter={checkLoggedIn} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }

}

export default App
