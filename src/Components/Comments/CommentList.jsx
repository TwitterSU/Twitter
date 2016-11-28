import React, {Component} from 'react'
import Comment from './Comment'
class CommentList extends Component{
  constructor(props){
    super(props)
  }
  render(){
      return(
        <div className="ui comments">
          <h3 className="ui dividing header">Comments</h3>
          <Comment />
        </div>
      )
  }
}
export default CommentList