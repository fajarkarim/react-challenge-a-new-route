import React, { Component } from 'react'

class GifItem extends Component {
  render () {
    var cardStyle = {
      width: '20rem'
    }
    return (
      <div className="col">
        <div className="card" style={cardStyle}>
          <iframe src={this.props.location.state.link} frameBorder="0" className="giphy-embed" allowFullScreen title='title'></iframe>
          <div className="card-body">
            <h4 className="card-title">{this.props.location.state.link}</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default GifItem
