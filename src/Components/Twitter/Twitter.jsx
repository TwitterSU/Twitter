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
      tweets: null,
      editMode: null,
      searchedTweets: []
    }
    this.tweetSubmitHandler = this.tweetSubmitHandler.bind(this)
    this.tweetEditHandler = this.tweetEditHandler.bind(this)
    this.addLikeHandler = this.addLikeHandler.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.search = this.search.bind(this)
    this.getTweets = this.getTweets.bind(this)
  }
  search(e) {
    e.persist()


    if (e.target.parentNode.children[0].value) {
      let searched = this.state.searchedTweets.concat(this.state.tweets)


      searched = searched.filter(tweet => {
        return tweet.content.includes(e.target.parentNode.children[0].value)

      })
      this.setState({
        tweets: null,
        searchedTweets: searched
      })
    } else {
      this.getTweets()
    }
    e.target.parentNode.children[0].value = ''

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
    e.persist()
    e.preventDefault()
    let index = e.target[0].id
    if (this.state.tweets[index].content != e.target[0].value) {
      let content = this.state.tweets[index]
      this.state.tweets[index].content = e.target[0].value
      KinveyRequester.update(this.state.tweets[index]._id, content).
        then(data => {
          console.log(data)
          this.setState({
            editMode: null,
            tweets: update(this.state.tweets, { index: { $set: this.state.tweets[index].content } })
          })
        })
    }
    else {
      this.setState({
        editMode: null
      })
    }


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
    //RETARDED KINVEY
    this.state.tweets[index].isLiked += (sessionStorage.getItem('username') + ', ')
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
    let index = -1
    let id = e.target.value
    this.state.tweets.find((item, i) => {
      if (item._id == id) {
        return index = i
      }
    })

    this.setState({
      editMode: { [index]: this.state.tweets[index] }
    })
  }

  handleLogout(e) {
    logout()
  }
  render() {
    let actionNode;
    if (this.state.editMode) {
      let key = Object.keys(this.state.editMode)[0]
      actionNode = (
        <form className='ui form' onSubmit={this.tweetEditHandler.bind(this)}>
          <div className='field'>
            <label>
              Edit tweet
              </label>
            <textarea name='content'
              id={key}
              defaultValue={this.state.editMode[key].content} />
          </div>
          <button className='ui button blue' type='submit'>
            Confirm
             </button>

        </form>
      )
    }
    else {
      actionNode = this.state.tweets ? <CreateTweet onsubmit={this.tweetSubmitHandler.bind(this)} /> : <button onClick={this.getTweets} className='ui button blue'>Back</button>
    }
    return (
      <div>
        <NavigationBar onClick={this.handleLogout} search={this.search} />
        < div className='ui container centered'>
          <div className='ui segment'>
            {actionNode}
          </div>
          <div className='ui segment'>
            <TweetList
              ref="tweetList"
              className='ui four column grid'
              edit={this.handleEdit}
              delete={this.handleDelete}
              addLike={this.addLikeHandler}
              tweets={this.state.tweets ? this.state.tweets : this.state.searchedTweets}
              />
          </div>
        </div>
      </div>
    )
  }
  getTweets() {
    KinveyRequester.retrieve('posts').then((tweets) => {

      this.setState({
        tweets: tweets.reverse()
      })
    })
  }
  componentDidMount() {
    this.getTweets()
  }
}
