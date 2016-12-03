import React, { Component } from 'react'
import Comment from './Comment.jsx'
import AddComment from '../AddComment/AddComment.jsx'
class CommentList extends Component {

  render () {
    let commentNodes
    if (this.props.comments) {
      commentNodes = this.props.comments.map((c) => {
        return (<Comment
          contetn={c.content}
          author={c.author}
          created={c._kmd.lmt}
          id={c._id}
          key={c._id} />)
      })
    }
    return (
      <div className='ui comments'>
        <h3 className='ui dividing header'>Comments</h3>
        <AddComment onkeyup={this.props.onkeyup} />
        {commentNodes ? <Comment /> : null}
      </div>
    )
  }
  componentWillMount(){

  }
}
export default CommentList
