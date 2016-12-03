import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import './App.css'
import Login from '../Login/Login'
import Registration from '../Registration/Registration'
import NavigationBar from '../Navigation/NavigationBar'
import Main from '../Main/Main'
import Twitter from '../Twitter/Twitter'
import NotFound from '../NotFound/NotFound'
import { checkLoggedIn } from '../../utils'

class App extends Component {

  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Login} />
        <Route path='/registration' component={Registration} />
        <Route path='app' component={Main} onEnter={checkLoggedIn}>
          <Route path='twitter' component={Twitter} />
        </Route>
        <Route path='*' component={NotFound} />
      </Router>
    )
  }

}

export default App
