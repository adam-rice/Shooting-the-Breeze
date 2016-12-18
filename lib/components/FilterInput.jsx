import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { filter } from 'lodash';

export default class FilterInput extends Component {
  render() {
    const {filterMessageSection} = this.props;
    return (
      <div>
      <input
        id="filter-input"
        placeholder="Filter"
        aria-label="filter existing messages"
        onChange={(e) => {filterMessageSection(e.target.value)}}/>
      </div>
    )
  }
}
