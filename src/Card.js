import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingCard: false,
      tempCardText: ''
    }
    this.handleCardClick = this.handleCardClick.bind(this)
    this.handleCardTextUpdate = this.handleCardTextUpdate.bind(this)
    this.handleUpdateCard = this.handleUpdateCard.bind(this)
  }

  handleCardClick() {
    this.setState({editingCard: !this.state.editingCard})
  }

  handleCardTextUpdate(e) {
    this.setState({tempCardText: e.target.value})
  }

  handleUpdateCard() {
    if (this.state.tempCardText !== '') {
      this.props.handleUpdateCard(this.state.tempCardText);
    }
    this.setState({editingCard: false, tempCardText: ''})
  }

  render() {
    let moveLeftButton = ''
    let moveRightButton = ''
    if (this.props.canMoveLeft) {
      moveLeftButton = (<button onClick={this.props.handleMoveCardLeft}>&lt;</button>)
    }
    if (this.props.canMoveRight) {
      moveRightButton = (<button onClick={this.props.handleMoveCardRight}>&gt;</button>)
    }
    if (this.state.editingCard) {
      return (
        <div className="card editing">
          <textarea onChange={this.handleCardTextUpdate}>{this.props.text}</textarea>
          <button onClick={ this.handleUpdateCard }>Save</button>
        </div>
      );
    } else {
      return (
        <div className="card clickable" onClick={this.handleCardClick}>
          <div className='left'>
            { moveLeftButton }
          </div>
          <div className="card-text">
            {this.props.text}
          </div>
          <div className='right'>
            { moveRightButton }
          </div>
        </div>
      );
    }

  }
}

export default Card;
