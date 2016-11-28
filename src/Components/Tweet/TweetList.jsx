import React, {Component} from 'react'
import $ from '../../../node_modules/jquery/dist/jquery.min'
import {api} from '../../rest/api.js'
import Tweet from './Tweet.jsx'
import './TweetList.css'
export default class TweetList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingData: true
    }
    this.tweetsData = []
  }


  render() {
    return (
      <div className="ui feed">
        {this.state.loadingData ? <h1>Loading</h1> : this.tweetsData.map((tweets) => {
          return <Tweet tweetData={tweets} key={tweets._id} />
        })}
      </div>
    )
  }

  componentDidMount() {
    if (sessionStorage.getItem('authToken')) {
      $.ajax({
        method: 'GET',
        url: api.serviceBaseUrl + 'appdata/' + api.appID + '/posts',
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')},
        success: (res) => {
          this.tweetsData = res
          return this.setState({
            loadingData: false
          })
        }
      })
    }
  }
}