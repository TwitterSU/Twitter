import React, { Component } from 'react'
import './Nav.css'
export default class Navbar extends Component{

  render(){
    return(
      <div className="ui action input">
        <input type="text" placeholder="Search..."/>
          <select className="ui compact selection dropdown">
            <option value="all">All</option>
            <option selected="" value="posts">Posts</option>
            <option value="comments">Comments</option>
          </select>
          <div type="submit" className="ui button">Search</div>
      </div>
    )
  }
  componentDidMount() {
  }
}