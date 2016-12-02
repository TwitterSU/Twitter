import React, { Component } from 'react'
import TweetList from '../Tweet/TweetList.jsx'
import CreateTweet from '../CreateTweet/CreateTweet'
import KinveyRequester from '../../Controllers/KinveyRequester'
import update from 'immutability-helper'
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
    this.search = this.search.bind(this)
  }
  search(e) {
    e.preventDefault()
    alert('searching')
  }
  tweetSubmitHandler(e) {
    e.preventDefault()

    KinveyRequester.create('posts', e)

      .then((data) => {

        this.setState({
          tweets: [data, ...this.state.tweets]
        })
      })
      .catch((error) => console.log(error))

  }
  tweetEditHandler(e) {
    console.log(this)
    console.log(e)
  }
  addLikeHandler(e) {
    e.persist()

    let index = -1
    let id = e.target.value


    this.state.tweets.map((tweet, i) => {
      if (id == tweet._id) {
        index = i
      }
    })
    this.state.tweets[index].likes++
    let content = this.state.tweets[index]

    this.state.tweets[index].isLiked += (sessionStorage.getItem('username')+', ')
    KinveyRequester.update(id, content).then(data => {
      this.setState({
        tweets: update(this.state.tweets, { index: { $set: this.state.tweets[index].likes } })

      })
    })

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
  handleEdit(e) {
    e.persist()
    console.log(e.target.value)
    console.log(this.state.tweets)
  }
  handleLogout() {
    logout()
  }
  render() {
    return (
      <div>
        <NavigationBar onClick={this.handleLogout} search={this.search} />
        < div className='ui container centered'>
          <div className='ui segment'>
            <CreateTweet onsubmit={this.tweetSubmitHandler.bind(this)} />
          </div>
          <div className='ui segment'>
            <TweetList
              ref="tweetList"
              className='ui four column grid'
              edit={this.handleEdit}
              delete={this.handleDelete}
              addLike={this.addLikeHandler}
              tweets={this.state.tweets}
              />
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    KinveyRequester.retrieve('posts').then((tweets) => {

      this.setState({
        tweets: tweets.reverse()
      })
    })
  }
}
