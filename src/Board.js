import React, { Component } from 'react';
import './Board.css';
import Column from './Column.js'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      1: {
        listName: null,
        cards: [],
        canMoveLeft: false,
        canMoveRight: false,
      },
      2: {
        listName: null,
        cards: [],
        canMoveLeft: false,
        canMoveRight: false,
      },
      3: {
        listName: null,
        cards: [],
        canMoveLeft: false,
        canMoveRight: false,
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

  handleMoveCardLeft(column_i, card_i) {
    let movingCard = this.state[column_i].cards[card_i]

    this.setState(prevState => ({
      [column_i]: {
        ...prevState[column_i],
        cards: prevState[column_i].cards.slice(0, card_i).concat(prevState[column_i].cards.slice(card_i + 1))
      },
      [column_i - 1]: {
        ...prevState[column_i - 1],
        cards: [...prevState[column_i - 1].cards, movingCard]
      }
    }))
  }

  handleMoveCardRight(column_i, card_i) {
    let movingCard = this.state[column_i].cards[card_i]

    this.setState(prevState => ({
      [column_i]: {
        ...prevState[column_i],
        cards: prevState[column_i].cards.slice(0, card_i).concat(prevState[column_i].cards.slice(card_i + 1))
      },
      [column_i + 1]: {
        ...prevState[column_i + 1],
        cards: [...prevState[column_i + 1].cards, movingCard]
      }
    }))
  }

  handleUpdateCard(column_i, card_i, text) {
    let updatedCard = { text }
    let updatedCardsArr = this.state[column_i].cards.slice()
    updatedCardsArr.splice(card_i, 1, updatedCard)
    this.setState(prevState => ({
      [column_i]: {
        ...prevState[column_i],
        cards: updatedCardsArr
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
          handleMoveCardLeft={(card_i) => this.handleMoveCardLeft(1, card_i) }
          handleMoveCardRight={(card_i) => this.handleMoveCardRight(1, card_i) }
          handleUpdateCard={(card_i, text) => this.handleUpdateCard(1, card_i, text) }
        />
        <Column
          data={this.state[2]}
          handleCreateList={(name) => this.handleCreateList(2, name) }
          handleCreateCard={(text) => this.handleCreateCard(2, text) }
          handleMoveCardLeft={(card_i) => this.handleMoveCardLeft(2, card_i) }
          handleMoveCardRight={(card_i) => this.handleMoveCardRight(2, card_i) }
          handleUpdateCard={(card_i, text) => this.handleUpdateCard(2, card_i, text) }
        />
        <Column
          data={this.state[3]}
          handleCreateList={(name) => this.handleCreateList(3, name) }
          handleCreateCard={(text) => this.handleCreateCard(3, text) }
          handleMoveCardLeft={(card_i) => this.handleMoveCardLeft(3, card_i) }
          handleMoveCardRight={(card_i) => this.handleMoveCardRight(3, card_i) }
          handleUpdateCard={(card_i, text) => this.handleUpdateCard(3, card_i, text) }
        />
      </div>
    );
  }
}

export default Board;
