import React, { Component } from 'react'
import './CreateTweet.css'
class CreateTweet extends Component {
  render () {
    return (

      <form className='ui form' onSubmit={this.props.onsubmit}>
        <div className='field'>
          <label>
            New tweet
          </label>
          <textarea name='content' placeholder='Tweet...' />
        </div>
        <button className='ui button blue' type='submit'>
          Tweet
        </button>
      </form>
    )
  }

}

export default CreateTweet
