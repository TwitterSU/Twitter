import React, { Component } from 'react'
import TweetList from '../Tweet/TweetList.jsx'
import CreateTweet from '../CreateTweet/CreateTweet'
import KinveyRequester from '../../Controllers/KinveyRequester'
import update from 'react-addons-update'
import NavigationBar from '../Navigation/NavigationBar'
import { logout } from '../../Models/User/logout.js'

export default class Twitter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: null
    }
    this.tweetSubmitHandler = this.tweetSubmitHandler.bind(this)
    this.tweetEditHandler = this.tweetEditHandler.bind(this)
    this.tweetEditHandler = this.tweetEditHandler.bind(this)
    this.addLikeHandler = this.addLikeHandler.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  tweetSubmitHandler(e) {
    e.preventDefault()

    KinveyRequester.create('posts', e)
      .then((data) => {
        this.setState({
          tweets: this.state.tweets.concat(data)
        })
      })
      .catch((error) => console.log(error))
  }
  tweetEditHandler(e) {
    debugger
  }
  addLikeHandler(e) {
    debugger
  }
  handleDelete(e) {
    e.persist()
    KinveyRequester.remove('posts', e.target.value).then(data => {
      let index = -1
      let id = e.target.value


      this.state.tweets.map((tweet, i) => {
        if (id == tweet._id) {
          index = i
        }
      })

      this.setState({
        tweets: update(this.state.tweets, { $splice: [[index, 1]] })
      })
    })

  }
  handleEdit(itemId, e) {
    console.log(e)
    console.log(itemId)
    console.log(this)
  }
  handleLogout() {
    logout()
  }
  render() {
    return (
      <div>
        <NavigationBar onClick={this.handleLogout} />
        < div className='ui container centered'>
          <div className='ui segment'>
            <CreateTweet onsubmit={this.tweetSubmitHandler.bind(this)} onedit={this.tweetEditHandler.bind(this)} />
          </div>
          <div className='ui segment'>
            <TweetList
              className='ui four column grid'
              edit={this.handleEdit}
              delete={this.handleDelete}
              addLike={this.addLikeHandler}
              tweets={this.state.tweets} />
          </div>
        </div>
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
