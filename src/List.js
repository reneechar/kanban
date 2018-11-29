import React, { Component } from 'react';
import './List.css';

class List extends Component {
  render() {
    return (
      <div className="list">
        <h3>{this.props.data.listName}</h3>
      </div>
    );
  }
}

export default List;
