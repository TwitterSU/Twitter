import React, {Component} from 'react';
import './Newtweet.css'
import KinveyRequests from '../../rest/crud/crud1.js'
import {create} from '../../rest/crud/create'
class CreateTweet extends Component {
  constructor() {
    super()
    this.state = {
      content: '',
      tags: ''
    }
    this.tweetSubmitHandler = this.tweetSubmitHandler.bind(this)
  }

  tweetSubmitHandler(e) {
    KinveyRequests.create('posts', e)
    .then(this.successCreateHandler.bind(this))
    .catch((error)=>console.log(error))
  }

  successCreateHandler(data,status) {
    console.log(data)
    console.log(status)
    console.log(this)
  }

  render() {
    return (

      <form className="ui form" onSubmit={this.tweetSubmitHandler}>
        <div className="field">
          <label>Text</label>
          <textarea name="content" placeholder="If text contains #tags they will be added...">
          </textarea>
        </div>
        <div className="field">
          <label>Hash tags</label>
          <textarea rows="1" placeholder="Separate by ," name="hashTags">
            </textarea>
        </div>
        <button className="ui button" type="submit">Create</button>
      </form>
    )
  }


}
export default CreateTweet