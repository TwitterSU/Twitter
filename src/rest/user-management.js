import $ from '../../node_modules/jquery/dist/jquery.min'
import { browserHistory } from 'react-router'
import { api } from './api.js'
function errorHandler (response) {
  let errorMessage = JSON.stringify(response)
  if (response.readyState === 0) {
    errorMessage = 'Cannot connect due to network error.'
  }
  if (response.responseJSON && response.responseJSON.description) {
    errorMessage = response.responseJSON.description
  }
  $('.errorMsg').text('Wrong passsword or username')
  console.log(errorMessage)
  return errorMessage
}

function successHandler (response) {
  sessionStorage.setItem('authToken', response._kmd.authtoken)
  sessionStorage.setItem('userId', response._id)
  sessionStorage.setItem('username', response.username)
  console.log('success')
  browserHistory.push('twitter')
  return { response}
}

export let handlers = {
  successHandler,
errorHandler}

export let BaseUserManagement = {
  logout: () => {
    $.ajax({
      method: 'POST',
      url: api.serviceBaseUrl + 'user/' + api.appID + '_logout',
      headers: {'Authorization': 'Kinvey ' + sessionStorage.clear()},
      success: successHandler,
      error: errorHandler
    })
  },
  login: (e) => {
    e.preventDefault()
    $.ajax({
      method: 'POST',
      url: api.serviceBaseUrl + 'user/' + api.appID + '/login',
      headers: { 'Authorization': 'Basic ' + btoa(api.appID + ':' + api.appSecret) },
      data: {
        username: e.target[0].value,
        password: e.target[1].value
      },
      success: handlers.successHandler,
      error: handlers.errorHandler

    })
  },
  register: (e) => {
    e.preventDefault()
    // this.checkForExistingUser(e.target[0].value)
    $.ajax({
      method: 'POST',
      url: api.serviceBaseUrl + 'user/' + api.appID + '/',
      data: {
        username: e.target[0].value,
        password: e.target[3].value,
        email: e.target[1].value
      },
      headers: { 'Authorization': 'Basic ' + btoa(api.appID + ':' + api.appSecret) },
      success: handlers.successHandler,
      error: handlers.errorHandler
    })
  }
  // checkForExistingUser (checkUserName) {
  //   $.ajax({
  //     method: 'POST',
  //     url: api.serviceBaseUrl + 'rpc/' + api.appID + '/check-username-exists',
  //     headers: { 'Authorization': 'Basic ' + btoa(api.appID + ':' + api.appSecret) },
  //     data: {
  //       'username': checkUserName
  //     },
  //     success: handlers.successHandler,
  //     error: handlers.errorHandler
  //   })
  //   /*{
  //    "usernameExists": "false" or "true"
  //    }*/
  // }

}
