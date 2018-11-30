import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Hello from '../Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={logo} alt="" className="logo" />
          <p>
            Edit<br/>
            <code>src/App.js</code><br/>
            and save to reload.
          </p>
          <Hello value={42}/>
        </header>
      </div>
    );
  }
}

export default App;
