import React, { Component } from 'react'
import Tweet from './Tweet.jsx'

export default class TweetList extends Component {

  render() {
    
    let tweetNodes = <h1>Loading</h1>
    if (this.props.tweets.length != 0) {
      tweetNodes = this.props.tweets.map((tweet, i) => {
        return (
          <Tweet
            newTweet={tweet.newTweet}
            owner={tweet._acl.creator}
            postDate={tweet._kmd.lmt}
            url={tweet.avatarUrl}
            content={tweet.content}
            author={tweet.author}
            likes={tweet.likes}
            id={tweet._id}
            edit={this.props.edit}
            open={this.props.open}
            delete={this.props.delete}
            addLike={this.props.addLike}
            onkeyup={this.props.onkeyup}
            comments={tweet.comments}
            key={tweet._id}
            tags={tweet.tags}
            isLiked={tweet.isLiked}
            />
        )
      })
    }

    return (

      <div className='ui comments middle aligned'>
        {tweetNodes}
      </div>
    )
  }
}
