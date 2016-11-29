import React, {Component} from 'react'
// import {retrive} from '../../rest/crud/retrive.js'
import KinveyRequests from '../../rest/crud/crud.js'

import Tweet from './Tweet.jsx'
import './TweetList.css'
export default class TweetList extends Component {
  constructor() {
    super()
    this.state = {
      tweets: null
    }
  }
  handleDelete(e, itemId){
    console.log(e)
    console.log(itemId)
  }
  handleEdit(e,itemId){
    console.log(e)
    console.log(itemId)
  }
  render() {
    let tweetNodes = <h1>Loading</h1>;
    if (this.state.tweets) {
      tweetNodes = this.state.tweets.reverse().map((tweets, i) => {
        let editDelete;
        if(tweets._acl.creator === sessionStorage.getItem('userId')){
          editDelete = (<div className="ui right">
            <button className="ui right floated button"
                    style={{"font-size": "0.75em"}}
                    onClick={this.handleDelete.bind(this, tweets._id)}>Delete</button>
            <button className="ui right floated button"
                    style={{"font-size": "0.75em"}}
                    onClick={this.handleEdit.bind(this, tweets._id)}>Edit</button>
          </div>)
        }
        return <Tweet created={tweets._kmd.lmt}
                      content={tweets.content}
                      author={tweets.author}
                      likes={tweets.likes}
                      id={tweets._id}
                      userAction={editDelete? editDelete:null}
                      key={tweets._id}/>
      })
    }
    
    return (
      <div className="ui feed">
        {tweetNodes}
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