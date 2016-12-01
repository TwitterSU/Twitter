import React, { Component } from 'react'
//import KinveyRequester from '../../Controllers/KinveyRequester.js'
export default class AddComment extends Component {
  constructor () {
    super()
    this.state = {
      comment: ''
    }
  }

  onChangeHandler (e) {
    this.setState({
      comment: e.target.value
    })
  }

  onKeyUp (e) {
    e.preventDefault()
    if (e.keyCode == 13 && e.target.value.trim() != '') {
      console.log(e.target.key)
      console.log(this)

    // KinveyRequest.create('comments', null, this.state.comment)
    // .then((data) => {
    //   console.log(data)
    // })
    // this.setState({
    //   comment: ''
    // })
    }
  }

  render () {
    return (
      <div className='field'>
        <textarea
          name='content'
          placeholder='Add comment...'
          onKeyUp={this.onKeyUp.bind(this)}
          onChange={this.onChangeHandler.bind(this)}
          content={this.state.comment}>
        </textarea>
      </div>
    )
  }
  componentDidMount () {}
}
