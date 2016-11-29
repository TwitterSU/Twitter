import React, { Component } from 'react'
import NavigationBar from '../Navigation/NavigationBas'
import TweetList from '../Tweet/TweetList.jsx'
import CreateTweet from '../CreateTweet/Newtweet'
export default class Twitter extends Component {
  render() {
    return (
      <div className="ui container centered">
            <NavigationBar />
          <div className="ui segment">
            <CreateTweet />
          </div>
          <div className="ui segment">
            <TweetList className='ui four column grid' />
          </div>
        </div>
    )
  }
}