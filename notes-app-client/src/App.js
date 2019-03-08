import React, { Component } from 'react';
import Link from 'react-router-dom';
import Navbar from 'react-bootstrap';

import App from './app.css';

class App extends Component {
  render(){
    return(
        <div className="App Container">
          <Navbar fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">From Scratch</Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
          </Navbar>
        </div>
            );
}
}

export default App;
