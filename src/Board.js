import React, { Component } from 'react';
import './Board.css';
import Column from './Column.js'

class Board extends Component {
  render() {
    return (
      <div className="board">
        <Column />
        <Column />
        <Column />
      </div>
    );
  }
}

export default Board;
