import React, {Component} from 'react'
class Comment extends Component {

  render(){
    return(
      <div className="comment">
        <a className="avatar">
          <img src={this.props.url}/>
        </a>
        <div className="content">
          <a className="author">{this.props.author}</a>
          <div className="metadata">
            <span className="date">{this.props.commentDate}</span>
          </div>
          <div className="text">
            <h2>{this.props.text}</h2>
          </div>
        </div>
      </div>
    )
  }
}
export default Comment