import React,{Component} from 'react'
export default class AddComment extends Component{

  render(){
    return(
      <div className="field">
        <textarea name="content" placeholder="Add comment...">
        </textarea>
      </div>
    )
  }
}