import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CharacterCount extends Component {
  render() {
    return (
      <p id="char-count">{this.props.draftMessageProp.length}</p>
    )
  }
}

CharacterCount.defaultProps = {draftMessageProp: ''};
