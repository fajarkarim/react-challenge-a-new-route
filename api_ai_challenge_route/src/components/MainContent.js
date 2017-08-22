import React, { Component } from 'react'
import axios from 'axios'
import GifContent from './GifContent'

class MainContent extends Component {
  constructor () {
    super()
    this.state = {
      _gifs: []
    }
  }

  componentDidMount() {
    console.log('masuk mount')
    this.getGif()
  }

  getGif () {
    axios.get('http://api.giphy.com/v1/gifs/search', {
      params: {
        q: 'lol cat',
        api_key: 'fec60103774a4f128d08445484cea83b',
        limit: 6
      }
    })
    .then(({ data }) => {
      let gif = data.data
      this.setState({
        _gifs: gif
      })

    })
    .catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      <div className="col">
        <div className="card">
          <div className="card-body">
           <div className="row">
            {this.state._gifs.map((gif, i) => {
              return <GifContent gif={gif} key={i}/>
            })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContent
