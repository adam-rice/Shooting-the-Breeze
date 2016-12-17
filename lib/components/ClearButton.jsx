import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ClearButton extends Component {
  render() {
    return (
      <input
        id="clear-btn"
        className="btn"
        value="Clear"
        type="button"
        disabled={this.props.draftMessageProp === ''}
        onClick={this.props.clearMessageFunction}
      />
    )
  }
}
