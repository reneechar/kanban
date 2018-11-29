import React, { Component } from 'react';
import './Column.css';
import List from './List.js';

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingListName: false,
      tempListName: ''
    }
    this.handleAddListClick = this.handleAddListClick.bind(this)
    this.handleListNameChange = this.handleListNameChange.bind(this)
    this.handleCreateList = this.handleCreateList.bind(this)
  }
  handleAddListClick(name) {
    this.setState({editingListName: true, tempListName: ''})
  }

  handleListNameChange(e) {
    this.setState({editingListName: true, tempListName: e.target.value});
  }

  handleCreateList(e) {
    this.props.handleCreateList(this.state.tempListName);
    this.setState({editingListName: false, tempListName: ''})
  }


  render() {
    if (this.props.data.listName === null) {
      if (this.state.editingListName) {
        return (
          <div className="column">
            <div className="add-list editing">
              <input type="text" onChange={ this.handleListNameChange } placeholder='List Name' />
              <button onClick={ this.handleCreateList }>Save</button>
            </div>
          </div>
        )
      } else {
        return (
          <div className="column">
            <div className="add-list">
              <button onClick={ this.handleAddListClick }>Add List</button>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="column">
          <List
            data={this.props.data}
            handleCreateCard={ (text) => this.props.handleCreateCard(text) }
            handleMoveCardLeft={(card_i) => this.props.handleMoveCardLeft(card_i) }
            handleMoveCardRight={(card_i) => this.props.handleMoveCardRight(card_i) }
            handleUpdateCard={(card_i, text) => this.props.handleUpdateCard(card_i, text) }
          />
        </div>
      )
    }

  }
}

export default Column;
