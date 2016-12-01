import React, { Component } from 'react'
import TweetList from '../Tweet/TweetList.jsx'
import CreateTweet from '../CreateTweet/CreateTweet'
import KinveyRequests from '../../rest/crud/crud.js'

export default class Twitter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: null
    }
  }
  tweetSubmitHandler(e) {
    e.preventDefault()

    KinveyRequests.create('posts', e)
      .then((data) => {
        this.setState((prevState, props) => {
          return prevState.tweets.push(data)
        })
      })
      .catch((error) => console.log(error))
  }

  render() {
    return (
      <div>
        {this.props.children}
        < div className='ui container centered' >
          <div className='ui segment'>
            <CreateTweet onsubmit={this.tweetSubmitHandler.bind(this)}>
            </CreateTweet>
          </div>
          <div className='ui segment'>
            <TweetList className='ui four column grid' tweets={this.state.tweets} />
          </div>
        </div >
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
