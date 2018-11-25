import React, { Component } from 'react';
import './Board.css';
import Column from './Column.js'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [ {name: null}, { name: null}, { name: null} ]
    }
  }
  handleAdd(i, name) {
    let columnData = this.state.columns[i]
    this.setState({...columnData, name: name})
  }

  render() {
    return (
      <div className="board">
        <Column
          value={this.state.columns[0]}
          handleAdd={() => this.handleAdd(0) }
        />
        <Column
          value={this.state.columns[1]}
          handleAdd={() => this.handleAdd(1) }
        />
        <Column
          value={this.state.columns[2]}
          handleAdd={() => this.handleAdd(2) }
        />
      </div>
    );
  }
}

export default Board;
