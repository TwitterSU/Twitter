import React, { Component } from 'react'
import CommentList from '../Comments/CommentList.jsx'

export default class Tweet extends Component {

  render () {
    let ownerActions;
    if (this.props.owner === sessionStorage.getItem('userId')) {
      ownerActions = (<div className='ui right'>
        <button className='ui right floated button blue'
                style={{ 'fontSize': '0.75em' }}
                onClick={this.props.delete.bind(this)}>
          Delete
        </button>
        <button className='ui right floated button blue'
                style={{ 'fontSize': '0.75em' }}
                onClick={this.props.edit.bind(this)}>
          Edit
        </button>
      </div>)
    }
    return (
      <div className="event" id={this.props.id}>
        <div className="label">
          <img src={this.props.url} />
        </div>

        <div className="content">
          <div className="summary">
            <a className="user">
              {this.props.author}
            </a>
            <div className="date">
              {this.props.created}
            </div>
            {ownerActions}
            <div className="content">
              {this.props.content}
            </div>
          </div>
          <div className="meta">
            <a className="like" onClick={this.props.addLike.bind(this)}>
              <i className="like icon"></i>
              {this.props.likes ? this.props.likes : 0}Likes
            </a>
          </div>
          <CommentList onChange={this.changeCommentsHandler} />
          <hr />
        </div>
      </div>
    )
  }
}