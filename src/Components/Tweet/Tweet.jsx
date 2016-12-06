import React, { Component } from 'react'
import { Dimmer, Loader, Segment, Image } from 'semantic-ui-react'
import CommentList from '../Comments/CommentList.jsx'
import EditNode from '../Tweet/EditNode.jsx'
import AddComment from '../AddComment/AddComment.jsx'

export default class Tweet extends Component {
  state = { tweetLoading: false }
  tweetStartLoading = () => { return this.setState({ tweetLoading: true }) }
  tweetStopLoading = () => { return this.setState({ tweetLoading: false }) }
  render() {
    const {tweetLoading} = this.state
    let ownerActions
    if (this.props.owner === sessionStorage.getItem('userId')) {
      ownerActions = (<div className='ui right'>
        <button
          className='ui right floated button blue'
          style={{ 'fontSize': '0.75em' }}
          onClick={this.props.delete.bind(null, this)}
          value={this.props.id}>
          Delete
        </button>
        <EditNode edit={this.props.edit.bind(null, this)}
          content={this.props.content} />

      </div>)
    }

    let style = {
      color: this.props.isLiked.split(', ')
        .includes(sessionStorage.getItem('username')) ? 'red' : 'grey'
    }

    return (
      <Segment>
        <Dimmer active={tweetLoading}>
          <Loader />
        </Dimmer>
        <div className="comment" id={this.props.id}>

          <div className="avatar">
            <img src={this.props.url} />

          </div>
          <div className="content">
            <div className='summary'>
              <a className='user'>
                {this.props.author}
              </a>
              <div className='date'>
                {new Date(this.props.postDate).toLocaleString()}
              </div>
              <div className='date'>
                <label>tags: </label>
                {this.props.tags}
              </div>
              {ownerActions}
              <div className="content">
                <h2>{this.props.content}</h2>
              </div>
            </div>
            <div className="meta">
              <button
                className="like"
                onClick={this.props.addLike.bind(null, this)}
                value={this.props.id}
                disabled={this.props.isLiked.split(', ').includes(sessionStorage.getItem('username'))}>
                <i className='like icon' style={style}></i>
                {this.props.likes}Love it
              </button>
            </div>
            <div className="ui comments">
              <h3 className='ui dividing header'>Comments</h3>
              <AddComment onkeyup={this.props.onkeyup.bind(null, this)} />
              <CommentList comments={this.props.comments} />
            </div>
          </div>
        </div>
      </Segment>
    )
  }
  componentDidUpdate() {

  }

}
