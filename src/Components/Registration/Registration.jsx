import './Registration.css'
import React, { Component } from 'react'

import { api } from '../../rest/api.js'
import $ from '../../../node_modules/jquery/dist/jquery.min'
import { handlers } from '../../rest/user-management.js'

export default class Registration extends Component {

  render () {
    return (
      <div className='ui middle aligned center aligned grid'>
        <div className='column'>
          <form className='ui large form'>
            <div className='ui stacked segment'>
              <div className='field'>
                <div className='ui left icon input'>
                  <i className='user icon' />
                  <input type='text' name='username' placeholder='Username' />
                </div>
              </div>
              <div className='field'>
                <div className='ui left icon input'>
                  <i className='user icon' />
                  <input type='text' name='email' placeholder='E-mail address' />
                </div>
              </div>
              <div className='field'>
                <div className='ui left icon input'>
                  <i className='lock icon' />
                  <input type='password' name='password' placeholder='Password' />
                </div>
              </div>
              <div className='field'>
                <div className='ui left icon input'>
                  <i className='lock icon' />
                  <input type='password' name='confirmpassword' placeholder='Confirm Password' />
                </div>
              </div>
              <div className='ui fluid large blue submit button'>
                Register
              </div>
            </div>
            <div className='ui error message'></div>
          </form>
        </div>
      </div>
    )
  }

  componentDidMount() {
    window.jQuery('.ui.form')
      .form({
        fields: {
          username: {
            identifier: 'username',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your username'
              }
            ]
          },
          email: {
            identifier: 'email',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your e-mail'
              },
              {
                type: 'email',
                prompt: 'Please enter a valid e-mail'
              }
            ]
          },

          password: {
            identifier: 'password',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your password'
              },
              {
                type: 'length[6]',
                prompt: 'Your password must be at least 6 characters'
              }
            ]
          },
          passwordConfirm: {
            identifier: 'confirmpassword',
            rules: [{
              type: 'match[password]',
              prompt: "Password don't match"
            }]
          }

        },
        inline: true,
        onSuccess: this.register
      })
  }
  register(e) {
    e.preventDefault()
    //this.checkForExistingUser(e.target[0].value)
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
