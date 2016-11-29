import React, { Component } from 'react'
import NavigationBar from '../Navigation/NavigationBas'
import TweetList from '../Tweet/TweetList.jsx'
import CreateTweet from '../CreateTweet/Newtweet'
export default class Twitter extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <div className="container">
          <div className="ui right aligned container">
            <NavigationBar />
          </div>
          <div >
            <CreateTweet className='ui grid' />
          </div>
          <div>
            <TweetList className='ui four column grid' />
          </div>
        </div>
      </div>
    )
  }
}