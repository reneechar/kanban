import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  render() {
    let moveLeftButton = ''
    let moveRightButton = ''
    if (this.props.canMoveLeft) {
      moveLeftButton = (<button onClick={this.props.handleMoveCardLeft}>&lt;</button>)
    }
    if (this.props.canMoveRight) {
      moveRightButton = (<button onClick={this.props.handleMoveCardRight}>&gt;</button>)
    }
    return (
      <div className="card">
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

export default Card;
