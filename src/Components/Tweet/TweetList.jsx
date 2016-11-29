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
    let tweetNodes = <h1>Loading</h1>;
    if(!this.state.loadingData){
      tweetNodes = this.tweetsData.map((tweets,i) => {
        return <Tweet tweetData={tweets} key={tweets._id} />
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
      $.ajax({
        method: 'GET',
        url: api.serviceBaseUrl + 'appdata/' + api.appID + '/posts',
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')},
        success: (res) => {
          console.log(res);
          this.tweetsData = res
          return this.setState({
            loadingData: false
          })
        }
      })
    }
  }
}