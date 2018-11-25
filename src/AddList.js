import React, { Component } from 'react';
import './AddList.css';

class AddList extends React.Component {
  render() {
    if (this.props.editingListName) {
      return (
        <div className="add-list">
          <textarea class={'col-' + this.props.column} rows='3' cols='50'></textarea>
          <button onClick={() => this.props.handleAdd() }>Add</button>
        </div>
      )
    } else {
      return (
        <div className="add-list">
          <button onClick={() => this.props.handleAddListClick() }>Add List</button>
        </div>
      );
    }

  }
}

export default AddList;
