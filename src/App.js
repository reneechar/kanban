import React, { Component } from 'react';
import './App.css';
import Board from './Board.js';

class App extends React.Component {
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
