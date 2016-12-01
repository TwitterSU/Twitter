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
          <textarea name='content' placeholder='If text contains #tags they will be added...'>
          </textarea>
        </div>
        <div className='field'>
          <label>
            Hash tags
          </label>
          <textarea rows='1' placeholder='Separate by ,' name='hashTags'>
          </textarea>
        </div>
        <button className='ui button blue' type='submit'>
          Tweet
        </button>
      </form>
    )
  }

}
export default CreateTweet
