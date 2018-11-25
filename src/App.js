import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          kanban
        </header>
        <hr />
        <Board />
      </div>
    );
  }
}

export default App;
