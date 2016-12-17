import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CharacterCount extends Component {
  render() {
    return (
      <div id="char-count">
        <p>{this.props.draftMessageProp.length}</p>
      </div>
    )
  }
}

CharacterCount.defaultProps = {draftMessageProp: ''};
