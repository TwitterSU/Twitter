import React, {Component} from 'react';
import './Newtweet.css'

import {create} from '../../rest/crud/create.js'
export default class CreateTweet extends Component{
  constructor (props) {
    super(props)
  }
  render(){
    return (
      <div className="ui middle aligned form">
        <form className="ui middle form">
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
      </div>
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
      inline: true,
      onSuccess: create
    })
  }
}