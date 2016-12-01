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
  handleDelete (itemId, e) {
    debugger
    console.log(e)
    console.log(itemId)
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
            <CreateTweet onsubmit={this.tweetSubmitHandler.bind(this)}>
            </CreateTweet>
          </div>
          <div className='ui segment'>
            <TweetList className='ui four column grid'
                       edit={this.handleEdit.bind(this)}
                       delete={this.handleDelete.bind(this)}
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
