import React, {Component} from 'react'
export default class Tweet extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="event">
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
            <a className="like">
              <i className="like icon"></i>
              {this.props.likes? this.props.likes: 0 } likes
            </a>
          </div>
        </div>
      </div>
    )
  }

}