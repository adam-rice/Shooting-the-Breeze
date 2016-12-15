import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import ActionBtns from './ActionBtns';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      draftMessage: '',
      user: null
    }
  }

  componentDidMount() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });

    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }
  // See number guesser for help.

  addNewMessage() {
    // const { user, draftMessage } = this.state;
    const user = this.props.user
    const draftMessage = this.state.draftMessage

    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: Date.now()
    });

    // this.setState({ draftMessage: '' });
  }

  emptyInputField() {
     this.setState({ draftMessage: '' });
   }

  render() {
    const { user, messages, draftMessage } = this.state;

    return (
      <div>
        <header>
          <h1>Shoot the Breeze</h1>
          <input id="filter-input" placeholder="Filter"></input>
          <section id="sort-btn-section">
            <input className="btn" type="button" value="Sort Up"></input>
            <input className="btn" type="button" value="Sort Down"></input>
          </section>
        </header>
        <section id="body">
          <article id="message-section"></article>
          <article id="active-user-list">
            <h2>Users</h2>
          </article>
        </section>
        <footer>
          <section id="logged-in">
            <h3>Logged in as <span>Andy</span> (andy@bigbibgbig.com)</h3>
          </section>
          <section id="message-maker">
            <input
              id="msg-input"
              placeholder="Message"></input>
            <p id="char-count">140</p>
            <input id="submit-btn" className="btn" type="button" value="Submit"></input>
            <input id="clear-btn" className="btn" type="button" value="Clear"></input>

            {user ? <p>Hello {user.displayName}</p> : <button onClick={() => signIn()}>Sign In</button> }

          </section>
        </footer>
      </div>
    )
  }
}
