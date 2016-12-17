import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { pick, map, extend } from 'lodash';

export default class Messages extends Component {

  get messageDecision() {
    let messages = [];
    if (this.props.filterMessages !== '') {
      messages = this.props.filterMessages;
      } else {
      messages = this.props.messages;
    }
    return messages;
  }

  render() {
    return (
      <div>
        <ul>
          { this.props.messages.map(m => <li key={m.key} className="msg-list-item">
            <h5 className="message-date"> {m.createdAt}</h5>
            {/* mobile version */}
            <h6> {m.user.displayName.split(' ').slice(0,1)}</h6>
            <p className="msg-text">{m.content}</p>
          </li>) }
        </ul>
      </div>
    )
  }
}

Messages.defaultProps = {messages: []}
