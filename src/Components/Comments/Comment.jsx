import React, {Component} from 'react'
class Comment extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="comment">
        <a className="avatar">
          <img src="/images/avatar/small/matt.jpg"/>
        </a>
        <div className="content">
          <a className="author">Matt</a>
          <div className="metadata">
            <span className="date">Today at 5:42PM</span>
          </div>
          <div className="text">
            How artistic!
          </div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>
      </div>
    )
  }
}
export default Comment