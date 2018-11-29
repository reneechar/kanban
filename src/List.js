import React, { Component } from 'react';
import './List.css';
import Card from './Card.js';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingNewCard: false,
      tempCardText: ''
    }
    this.handleAddCardClick = this.handleAddCardClick.bind(this);
    this.handleCardTextUpdate = this.handleCardTextUpdate.bind(this);
    this.handleCreateCard = this.handleCreateCard.bind(this);
  }

  handleAddCardClick() {
    this.setState({addingNewCard: true})
  }

  handleCardTextUpdate(e) {
    this.setState({tempCardText: e.target.value})
  }

  handleCreateCard() {
    this.props.handleCreateCard(this.state.tempCardText);
    this.setState({addingNewCard: false, tempCardText: ''})
  }

  render() {
    if (this.state.addingNewCard) {
      return (
        <div className="list">
          <h3>{this.props.data.listName}</h3>
          <div className="cards-container">
            {this.props.data.cards.map((card,index) => {
              return <Card text={card.text} index={index} />
            })}
          </div>
          <div className="add-card editing">
            <textarea onChange={ this.handleCardTextUpdate }></textarea>
            <button onClick={ this.handleCreateCard }>Save</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="list">
          <h3>{this.props.data.listName}</h3>
          <div className="cards-container">
            {this.props.data.cards.map((card, index) => {
              return <Card
                      text={card.text}
                      canMoveLeft={this.props.data.canMoveLeft}
                      canMoveRight={this.props.data.canMoveRight}
                      handleMoveCardLeft={() => this.props.handleMoveCardLeft(index) }
                      handleMoveCardRight={() => this.props.handleMoveCardRight(index) }
                      handleUpdateCard={(text) => this.props.handleUpdateCard(index, text) }
                     />
            })}
          </div>
          <div className="add-card">
            <button onClick={ this.handleAddCardClick }>Add Card</button>
          </div>
        </div>
      );
    }

  }
}

export default List;
