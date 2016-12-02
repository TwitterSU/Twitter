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
      editMode: null
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
    e.preventDefault()
    console.log(this)
    console.dir(e.target[0].value)

    this.setState({
      editMode: null
    })
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
    let index = -1
    let id = e.target.value

    this.state.tweets.map((tweet, i) => {
      if (id == tweet._id) {
        index = i
      }
    })

    this.setState({
      editMode: this.state.tweets[index]
    })
  }

  handleLogout() {
    logout()
  }
  render() {
    let actionNode;
    if(this.state.editMode){
      actionNode = (
          <form className='ui form' onSubmit={this.tweetEditHandler.bind(this)}>
            <div className='field'>
              <label>
                Edit tweet
              </label>
              <textarea name='content' defaultValue={this.state.editMode.content} />
            </div>
             <button className='ui button blue' type='submit'>
               Confirm
             </button>

           </form>
       )
     }
     else {
      actionNode = <CreateTweet onsubmit={this.tweetSubmitHandler.bind(this)} />
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
