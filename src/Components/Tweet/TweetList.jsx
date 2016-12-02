import React, { Component } from 'react'
// import {retrive} from '../../rest/crud/retrive.js'

import Tweet from './Tweet.jsx'
import './TweetList.css'
export default class TweetList extends Component {


  render() {
    let tweetNodes = <h1>Loading</h1>
    if (this.props.tweets) {
      tweetNodes = this.props.tweets.map((tweets, i) => {
        return (<Tweet
          owner={tweets._acl.creator}
          created={tweets._kmd.lmt}
          url={this.props.url}
          content={tweets.content}
          author={tweets.author}
          likes={tweets.likes}
          id={tweets._id}
          edit={this.props.edit}
          delete={this.props.delete}
          addLike={this.props.addLike}
          key={i}
          tags={tweets.tags}
          />)
      })
    }

    return (
      <div className='ui feed'>
        {tweetNodes}
      </div>
    )
  }

}
