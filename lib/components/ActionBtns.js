import React, { Component } from 'react';

export default class ActionBtns extends Component {
  render() {
    return(
      <button
        className="ActionBtns"
        id={this.props.id}
        disabled={this.props.disabled}
        onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    )
  }
}
