import React, {Component} from 'react'
import $ from '../../../node_modules/jquery/dist/jquery.min.js'
export default class Tweet extends Component {
  constructor() {
    super()
  }


  render() {

    return (
      <div className="event" id={this.props.id}>
        <div className="label">
          <img src="/images/avatar/small/elliot.jpg"/>
        </div>
        <div className="content">
          <div className="summary">
            <a className="user">
              {this.props.author}
            </a>
            <div className="date">
              {this.props.created}
            </div>
            <div className="content">
              {this.props.content}
            </div>
          </div>
          <div className="meta">
            <a className="like" onClick={this.addLike}>
              <i className="like icon"></i>
              {this.props.likes? this.props.likes: 0 } likes
            </a>
          </div>
        </div>
      </div>
    )
  }

}