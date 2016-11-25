import React, { Component } from 'react'
import './Login.css'
import { BaseUserManagement } from '../../rest/user-management.js'
let {login} = BaseUserManagement
export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.loginHandler = login
  }
  onChangeHandler (e) {
    if (e.target.name === 'email') {
      this.setState({
        email: e.target.value
      })
    } else {
      this.setState({
        password: e.target.value
      })
    }
  }
  render () {
    return (
      <div className='ui middle aligned center aligned grid test'>
        <div className='column'>
          <h2 className='ui blue image header'><img src='images/logo.png' className='image' role='presentation' /> <div className='content'> Log-in to your account </div></h2>
          <form className='ui large form'>
            <div className='ui stacked segment'>
              <div className='field'>
                <div className='ui left icon input'>
                  <i className='user icon' />
                  <input
                    type='text'
                    name='email'
                    placeholder='E-mail address'
                    onChange={this.onChangeHandler.bind(this)} />
                </div>
              </div>
              <div className='field'>
                <div className='ui left icon input'>
                  <i className='lock icon' />
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={this.onChangeHandler.bind(this)} />
                </div>
              </div>
              <div className='ui fluid large blue submit button'>
                Login
              </div>
            </div>
            <div className='ui error message'></div>
          </form>
          <div className='ui message'>
            New to us? <a href='#'>Sign Up</a>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount () {
    window.jQuery('.ui.form')
      .form({
        fields: {
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
                type: 'length[3]',
                prompt: 'Your password must be at least 3 characters'
              }
            ]
          }
        },
        inline: true,

        onSuccess: this.loginHandler.bind(this)
      })
  }

}
