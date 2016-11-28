import React, {Component} from 'react';
import './Newtweet.css'
export default class CreateTweet extends Component{

  render(){
    return (
    <div className="ui form">
      <div className="field">
      <label>Text</label>
      <textarea>
      </textarea>
      </div>
      <div className="field">
      <label>Hash tags</label>
    <textarea rows="2">
    </textarea>
      </div>
      <button className="ui button" type="submit">Create</button>
      </div>
  )
  }
}