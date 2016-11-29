import React, { Component } from 'react'
import NavigationBar from '../Navigation/NavigationBas'
import TweetList from '../Tweet/TweetList.jsx'
import CreateTweet from '../CreateTweet/Newtweet'
import KinveyRequests from '../../rest/crud/crud.js'

export default class Twitter extends Component {
  constructor() {
    super()
    this.state = {
      tweets: null
    }
  }
  render() {
    return (
      <div className="ui container centered">
        <NavigationBar />
        <div className="ui segment">
          <CreateTweet />
        </div>
        <div className="ui segment">
          <TweetList className='ui four column grid' tweets={this.state.tweets} />
        </div>
      </div>
    )
  }
  componentDidMount() {
    if (sessionStorage.getItem('authToken')) {

      KinveyRequests.retrieve('posts').then((data) => {
        this.setState({
          tweets: data

        })
      })
    }
  }
}