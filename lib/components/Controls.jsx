import React, { Component } from 'react';

export default class Controls extends React.Component{
  constructor() {
    super();
    this.state = {
      draftMessage: '',
      user: null
    };
  }

  emptyInputField() {
     this.setState({ draftMessage: '' });
   }

  render() {
    return(
      <footer>
        <section id="logged-in">
          <h3>Logged in as <span>Andy</span> (andy@bigbibgbig.com)</h3>
        </section>
        <section id="message-maker">
          <input
            value={this.state.draftMessage}
            onChange={(e) => this.setState({ draftMessage: e.target.value })}
            id="msg-input"
            placeholder="Message"/>
          <p
            id="char-count">{this.state.draftMessage.length}</p>
          <input
            id="submit-btn"
            className="btn"
            type="button"
            value="Submit" />
            {/* onClick={() => this.addNewMessage()}/> */}
            <input
              className="btn"
              id="clear-btn"
              type="button"
              value="clear"
              // disabled={!this.props.draftMessage}
              onClick={() => { this.emptyInputField() } }
            />
          {/* {user ? <p>Hello {user.displayName}</p> : <button onClick={() => signIn()}>Sign In</button> } */}
        </section>
      </footer>
    )
  }
}
