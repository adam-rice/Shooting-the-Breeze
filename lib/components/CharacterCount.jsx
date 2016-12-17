import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CharacterCount extends Component {
  counter() {
    if (this.props.draftMessageProp.length === 0) {
      return 140;
    } else {
      return 140-this.props.draftMessageProp.length;
    }
  }

  render() {
    return (
      <div id="char-count">
        <p tabIndex="0" aria-label="maximum characters allowed is 140">{this.counter()}</p>
      </div>
    )
  }
}

CharacterCount.defaultProps = {draftMessageProp: ''};
