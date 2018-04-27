import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import * as postsApi from '../utils/postsApi'

class App extends Component {
  state = {
    categories:[],
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World!!</h1>
        </header>
        {this.state.categories.map((category)=>(
          <h2 key={category.name}>{category.name}</h2>
        ))}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
