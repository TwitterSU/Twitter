import React, { Component } from 'react'
import './Nav.css'
export default class NavigationBar extends Component{

  render(){
    return(
      <div className="ui action input center aligned grid ">
        <input type="text" placeholder="Search..."/>
          <div type="submit" className="ui button">Search</div>
      </div>
    )
  }
  componentDidMount() {
  }
}