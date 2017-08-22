import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import NavBar from './components/NavBar'
import BodyContent from './components/BodyContent'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <BodyContent/>
        </div>
      </Router>
    );
  }
}

export default App;
