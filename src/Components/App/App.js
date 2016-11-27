import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import './App.css'
import Login from '../Login/Login'
import Registration from '../Registration/Registration'
import Main from '../Content/Content'
import NotFound from '../NotFound/NotFound'
class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Login} />
        <Route path='/registration' component={Registration} />
        <Route path='twitter' component={Main} onEnter={checkLoggedIn} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }

}
let checkLoggedIn = () => {
  let user = sessionStorage.getItem('username')
  if (!user) {
    browserHistory.push('/')
  } else {
    return true
  }
}
export default App
