import React, { Component } from 'react';
import './Board.css';
import Column from './Column.js'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      1: {
        listName: null,
        cards: []
      },
      2: {
        listName: null,
        cards: []
      },
      3: {
        listName: null,
        cards: []
      }
    }
  }
  handleCreateList(i, name) {
    this.setState(prevState => ({
      [i]: {
        ...prevState[i],
        listName: name
      }
    }))
  }

  render() {
    console.log('state board ', this.state)
    return (
      <div className="board">
        <Column
          data={this.state[1]}
          handleCreateList={(name) => this.handleCreateList(1, name) }
        />
        <Column
          data={this.state[2]}
          handleCreateList={(name) => this.handleCreateList(2, name) }
        />
        <Column
          data={this.state[3]}
          handleCreateList={(name) => this.handleCreateList(3, name) }
        />
      </div>
    );
  }
}

export default Board;
