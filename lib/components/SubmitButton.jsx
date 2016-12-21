/*jshint esversion: 6 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SubmitButton extends Component {
  render() {
    return (
      <input
        id="submit-btn"
        className="btn"
        aria-label="Submit button for your new message"
        tabIndex="0"
        value="Submit"
        type="button"
        disabled={this.props.draftMessageProp.length >= 140 || this.props.draftMessageProp.length === 0 }
        onClick={this.props.addMessageFunction}
      />
    )
  }
}

// SubmitButton.defaultProps = {draftMessageProp: ''}
