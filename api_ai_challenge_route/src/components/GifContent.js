import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GifContent extends Component {

  render () {
    var cardStyle = {
      width: '20rem'
    }
    return (
      <div className="col">
        <div className="card" style={cardStyle}>
          <iframe src={this.props.gif.embed_url} frameBorder="0" className="giphy-embed" allowFullScreen title={this.props.gif.id}></iframe>
          <div className="card-body">
            <h4 className="card-title">
              <Link to={{
                pathname: `/cats/${this.props.gif.id}` }}>
                <p className="text-center">{ this.props.gif.id }</p>
              </Link>
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

export default GifContent
