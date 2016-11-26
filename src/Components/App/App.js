import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import './App.css'
import Login from '../Login/Login'
import Registration from '../Registration/Registration'
import NotFound from '../NotFound/NotFound'
class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Login} />
        <Route path='/registration' component={Registration} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
}

export default App
