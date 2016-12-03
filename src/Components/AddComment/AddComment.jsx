import React, { Component } from 'react'
//import KinveyRequester from '../../Controllers/KinveyRequester.js'
export default class AddComment extends Component {

  render () {
    return (
      <div className='field'>
        <textarea
          name='content'
          placeholder='Add comment...'
          onKeyUp={this.props.onkeyup}
          >
        </textarea>
      </div>
    )
  }
}
