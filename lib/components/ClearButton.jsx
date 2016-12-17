import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ClearButton extends Component {
  render() {
    return (
      <input
        id="clear-btn"
        className="btn"
        aria-label="clear button to clear out contents of the draft message input field"
        tabIndex="0"
        value="Clear"
        type="button"
        disabled={this.props.draftMessageProp === ''}
        onClick={this.props.clearMessageFunction}
      />
    )
  }
}
