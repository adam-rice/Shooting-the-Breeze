/*jshint esversion: 6 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { pick, map, extend } from 'lodash';

export default class Messages extends Component {
  get messageDecision() {
    let messages = [];
    if (this.props.filterMessageSection !== '') {
      messages = this.props.filterMessageSection;
    } else {
      messages = this.props.messages;
    }
    return messages;
  }

  render() {
    return (
      <ul>
        { this.props.messages.map(m =>
        <li key={m.key}
            tabIndex="0"
            className="msg-list-item">
          <span className="message-date"> {m.createdAt}</span>
          <span className="message-date-mobile">{m.mobileCreatedAt}</span>
          <h6> {m.user.displayName.split(' ').slice(0,1)}</h6>
          <p className="msg-text">{m.content}</p>
        </li>) }
      </ul>
    )
  }
}

// Messages.defaultProps = {messages: []}
