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
    e.preventDefault();
    this.props.handleCreateList(this.state.tempListName);
    this.setState({editingListName: false, tempListName: ''})
    console.log('here')
  }

  render() {
    console.log('list name', this.props)
    if (this.props.data.listName === null) {
      if (this.state.editingListName) {
        return (
          <div className="column">
            <div className="add-list">
              <input type="text" onChange={ this.handleListNameChange } />
              <button onClick={ this.handleCreateList }>Add</button>
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
          />
        </div>
      )
    }

  }
}

export default Column;
