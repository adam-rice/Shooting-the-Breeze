import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class EnterLeave extends Component {
  render() {
    return(
      <section id="logged-in">
        {this.props.user ? <div><h3 tabIndex="0">Logged in as <span>{this.props.user.displayName}</span> ({this.props.user.email})</h3>
        <button
          id="sign-out"
          onClick={() => this.props.signOutFunction()}
          >Sign Out
        </button></div>
        : <button
            id="log-btn"
            className="btn"
            onClick={() => this.props.signInFunction()}>Log In
          </button> }
      </section>
    )
  }
}
