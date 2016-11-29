import React, {Component} from 'react'
// import {retrive} from '../../rest/crud/retrive.js'
import KinveyRequests from '../../rest/crud/crud1.js'
import Tweet from './Tweet.jsx'
import './TweetList.css'
export default class TweetList extends Component {
  constructor() {
    super()
    this.state = {
      tweets: null
    }
  }

  render() {
    let tweetNodes = <h1>Loading</h1>;
    if(this.state.tweets){
      tweetNodes = this.state.tweets.reverse().map((tweets,i) => {
        return <Tweet created={tweets._kmd.lmt}
                      content={tweets.content}
                      author={tweets.author}
                      likes={tweets.likes}
                      id={tweets._id}
                      key={tweets._id} />
      })
    }
    else{
      tweetNodes = <h1>Loading</h1>
    }
    return (
      <div className="ui feed">
        {tweetNodes}
      </div>
    )
  }

  componentDidMount() {
    if (sessionStorage.getItem('authToken')) {
      KinveyRequests.retrieve('posts').then((data)=>{
        this.setState({
          tweets: data
        })
      })
    }
  }
}