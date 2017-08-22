import React, { Component } from 'react'
import Clock from './Clock'

class SideBar extends Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <p>Hello World</p>            
            <Clock/>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar
