import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Previewer from './Previewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Markdown Previewer</h2>
          <h4>Using "create-react-app" and "marked"</h4>
        </div>
        <Previewer />
      </div>
    );
  }
}


export default App;
