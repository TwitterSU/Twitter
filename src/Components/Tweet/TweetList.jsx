import React, { Component } from 'react'
// import {retrive} from '../../rest/crud/retrive.js'

import Tweet from './Tweet.jsx'
import './TweetList.css'
export default class TweetList extends Component {

  handleDelete(e, itemId) {
    console.log(e)
    console.log(itemId)
  }
  handleEdit(e, itemId) {
    console.log(e)
    console.log(itemId)
  }
  render() {
    let tweetNodes = <h1>Loading</h1>;
    if (this.props.tweets) {
      tweetNodes = this.props.tweets.reverse().map((tweets, i) => {
        let editDelete
        if (tweets._acl.creator === sessionStorage.getItem('userId')) {
          editDelete = (<div className="ui right">
            <button className="ui right floated button blue"
              style={{ "fontSize": "0.75em" }}
              onClick={this.handleDelete.bind(this, tweets._id)}>Delete</button>
            <button className="ui right floated button blue"
              style={{ "fontSize": "0.75em" }}
              onClick={this.handleEdit.bind(this, tweets._id)}>Edit</button>
          </div>)
        }
        
        return <Tweet created={tweets._kmd.lmt}
          url={this.props.url}
          content={tweets.content}
          author={tweets.author}
          likes={tweets.likes}
          id={tweets._id}
          userAction={editDelete}
          key={tweets._id} />
      })
    }

    return (
      <div className="ui feed">
        {tweetNodes}
      </div>
    )
  }


}