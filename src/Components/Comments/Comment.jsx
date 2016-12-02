import React, {Component} from 'react'
class Comment extends Component {

  render(){
    return(
      <div className="comment">
        <a className="avatar">
          <img src="/images/avatar/small/matt.jpg"/>
        </a>
        <div className="content">
          <a className="author">{this.props.author}</a>
          <div className="metadata">
            <span className="date">{this.props.created}</span>
          </div>
          <div className="text">
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }
}
export default Comment