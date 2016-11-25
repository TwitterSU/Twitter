import React, { Component } from 'react'
import './Login.css'
export default class Login extends Component {
  render() {
    return (
      <div className='ui middle aligned center aligned grid test'>
        <div className='column'>
          <h2 className='ui blue image header'><img src='images/logo.png' className='image' role='presentation' /> <div className='content'> Log-in to your account </div></h2>
          <form className='ui large form'>
            <div className='ui stacked segment'>
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
              <div className='ui fluid large blue submit button'>
                Login
            </div>
            </div>
            <div className='ui error message' ></div>
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
                type: 'length[6]',
                prompt: 'Your password must be at least 6 characters'
              }
            ]
          }
        }
      })
  }

}
