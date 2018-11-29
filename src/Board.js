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

  handleCreateCard(i, text) {
    let newCard = { text }
    this.setState(prevState => ({
      [i]: {
        ...prevState[i],
        cards: [...prevState[i].cards, newCard]
      }
    }))
  }

  render() {
    return (
      <div className="board">
        <Column
          data={this.state[1]}
          handleCreateList={(name) => this.handleCreateList(1, name) }
          handleCreateCard={(text) => this.handleCreateCard(1, text) }
        />
        <Column
          data={this.state[2]}
          handleCreateList={(name) => this.handleCreateList(2, name) }
          handleCreateCard={(text) => this.handleCreateCard(2, text) }
        />
        <Column
          data={this.state[3]}
          handleCreateList={(name) => this.handleCreateList(3, name) }
          handleCreateCard={(text) => this.handleCreateCard(3, text) }
        />
      </div>
    );
  }
}

export default Board;
