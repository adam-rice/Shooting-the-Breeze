import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class EnterLeave extends Component {
  render() {
    return(
      <section id="logged-in">
        {this.props.user ? <h3>Logged in as <span>{this.props.user.displayName}</span> ({this.props.user.email})</h3> : <button className="btn" onClick={() => this.props.signInFunction()}>Sign In</button> }
      </section>
    )
  }
}
