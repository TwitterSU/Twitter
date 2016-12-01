import React, { Component } from 'react'
import TweetList from '../Tweet/TweetList.jsx'
import CreateTweet from '../CreateTweet/CreateTweet'
import KinveyRequester from '../../Controllers/KinveyRequester'

export default class Twitter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: null
    }
  }
  tweetSubmitHandler(e) {
    e.preventDefault()

    KinveyRequester.create('posts', e)
      .then((data) => {
        this.setState((prevState, props) => {
          return prevState.tweets.push(data)
        })
      })
      .catch((error) => console.log(error))
  }
  tweetEditHandler(e){
    debugger
  }
  addLikeHandler(e){
    debugger
  }
  handleDelete (itemId, e) {
    KinveyRequester.remove('posts',itemId).then((data,status)=>{
      console.log(data)
      console.log(status)
    })
  }
  handleEdit (itemId, e) {
    console.log(e)
    console.log(itemId)
  }
  render() {
    return (
      <div>
        {this.props.children}
        < div className='ui container centered' >
          <div className='ui segment'>
            <CreateTweet onsubmit={this.tweetSubmitHandler.bind(this)}
                          onedit={this.tweetEditHandler.bind(this)}>
            </CreateTweet>
          </div>
          <div className='ui segment'>
            <TweetList className='ui four column grid'
                       edit={this.handleEdit.bind(this)}
                       delete={this.handleDelete.bind(this)}
                       addLike={this.addLikeHandler}
                       tweets={this.state.tweets} />
          </div>
        </div >
      </div>
    )
  }
  componentDidMount() {

    KinveyRequester.retrieve('posts').then((data) => {
      this.setState({
        tweets: data

      })
    })

  }
}
