import React, { Component } from 'react'
import './Nav.css'
export default class Navbar extends Component{

  render(){
    return(
      <div className="ui action input">
        <input type="text" placeholder="Search..."/>
          <div type="submit" className="ui button">Search</div>
      </div>
    )
  }
  componentDidMount() {
  }
}