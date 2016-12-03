import React, {Component} from 'react'
import Comment from './Comment.jsx'
class CommentList extends Component {

  render() {
    return (
      <div>
        {this.props.comments ?
          this.props.comments.map((c) => {
            if (c !== '')
              return (<Comment
                text={c.commentText}
                author={c.author}
                url={c.avatarUrl}
                commentDate={c._kmd.lmt}
                id={c._id}
                key={c._id}/>)
          }) : null}
      </div>
    )
  }

  componentWillMount() {

  }
}
export default CommentList
