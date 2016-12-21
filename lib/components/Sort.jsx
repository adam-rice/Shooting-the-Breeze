/*jshint esversion: 6 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Sort extends Component {
  render() {
    return (
      <section id="sort-btn-section">
        <input
          className="btn"
          type="button"
          value="Sort ↑"
          onClick={this.props.sortFunction}
          disabled={this.props.toggle()}
        />
        <input
          className="btn"
          disabled={this.props.disabled}
          type="button"
          value="Sort ↓"
          onClick={this.props.sortFunction}/>
        </section>
      )
    }
  }
