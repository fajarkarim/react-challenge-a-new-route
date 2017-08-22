import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MainContent from './MainContent'
import SideBar from './SideBar'
import GifItem from './GifItem'

class BodyContent extends Component {
  render () {
    return (
      <div className="container mt-4">
        <div className="row">
          <SideBar/>
          <Route exact path="/" component={MainContent}/>
          <Route path="/cats/:id" component={GifItem}/>
        </div>
      </div>
    )
  }
}

export default BodyContent
