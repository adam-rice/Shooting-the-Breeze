import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MessageInput extends Component {
  render() {
    return (
      <input
        id="msg-input"
        placeholder="Message"
        aria-label="submit your new message"
        value={this.props.draftMessageProp}
        onChange={this.props.stateProp} />
    )
  }
}
