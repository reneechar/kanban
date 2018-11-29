import React, { Component } from 'react';
import './Board.css';
import Column from './Column.js'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      1: {
        listName: 'l1',
        cards: [{text: 'this'}, {text: 'that'}],
        canMoveRight: false,
        canMoveLeft: false,
      },
      2: {
        listName: null,
        cards: [],
        canMoveRight: false,
        canMoveLeft: true,
      },
      3: {
        listName: null,
        cards: [],
        canMoveRight: false,
        canMoveLeft: false,
      }
    }
    this.updateCardMovingOptions = this.updateCardMovingOptions.bind(this);
  }
  handleCreateList(i, name) {
    this.setState(prevState => ({
      [i]: {
        ...prevState[i],
        listName: name
      }
    }))
    this.updateCardMovingOptions(i)
  }

  updateCardMovingOptions(i) {
    if (i === 1) {
      this.setState(prevState => ({
        [i + 1]: {
          ...prevState[i + 1],
          canMoveLeft: true
        }
      }))
    } else if (i === 2) {
      this.setState(prevState => ({
        [i + 1]: {
          ...prevState[i + 1],
          canMoveLeft: true
        },
        [i - 1]: {
          ...prevState[i - 1],
          canMoveRight: true
        }
      }))
    } else if (i === 3) {
      this.setState(prevState => ({
        [i - 1]: {
          ...prevState[i - 1],
          canMoveRight: true
        }
      }))
    }
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
