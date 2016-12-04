import React, { Component } from 'react'

export default class EditNode extends Component{
  constructor(){
    super()
  }
  render(){
    return(
        <div>
          <h1 className="header">Header</h1>
          <div className="content">
            <p>Kur</p>
          </div>
            <div className="ui approve button" >Approve</div>
        </div>
    )
  }
}