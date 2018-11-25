import React, { Component } from 'react';
import './Column.css';
import AddList from './AddList.js';

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingListName: this.props.editingListName
    }
  }

  handleAddListClick() {
    this.setState({editingListName: true})
  }

  render() {
    return (
      <div className="column">
        { this.props.name }
        <AddList
          editingListName={this.state.editingListName}
          handleAddListClick={ () => this.handleAddListClick() }
          handleAdd={ () => { this.props.handleAdd() }}
        />
      </div>
    );
  }
}

export default Column;
