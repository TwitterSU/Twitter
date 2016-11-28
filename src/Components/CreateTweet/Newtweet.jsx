import React, {Component} from 'react';
import './Newtweet.css'

import {create} from '../../rest/crud/create.js'
class CreateTweet extends Component{
  constructor (props) {
    super(props)
  }
  render(){
    return (
        <form className="ui form">
          <div className="field">
            <label>Text</label>
            <textarea name="content">
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
  componentDidMount(){
    window.jQuery('.ui.form')
    .form({
      fields: {
        content: {
          identifier: 'content'
        },
        hashTags: {
          identifier: 'hashTags'
        }
      },
      onSuccess: create.bind(this)
    })
  }
}
export default CreateTweet