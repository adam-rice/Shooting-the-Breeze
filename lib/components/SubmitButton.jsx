import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class SubmitButton extends Component {
  render() {
    return (
      <input
        id="submit-btn"
        className="btn"
        value="Submit"
        type="button"
        //TODO not disabled when dm length is ''
        disabled={this.props.draftMessageProp === ''}
        disabled={this.props.draftMessageProp.length >= 140}
        onClick={this.props.addMessageFunction}
      />
    )
  }
}

SubmitButton.defaultProps = {draftMessageProp: ''}
