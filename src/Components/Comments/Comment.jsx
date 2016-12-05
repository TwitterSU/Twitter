import React, {Component} from 'react'
class Comment extends Component {
  
  render(){
    return(
      <div className="comment">
        <a className="avatar" src={this.props.url} alt="./images.jpg">
        </a>
        <div className="content">
          <a className="author">{this.props.author}</a>
          <div className="metadata">
            <span className="date">{new Date(this.props.commentDate).toLocaleString()}</span>
          </div>
          <div className="text">
            <h2>{this.props.text}</h2>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount(){
    
  }
}
export default Comment