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
    this.emptyInputField()
  }

  emptyInputField() {
     this.setState({ draftMessage: '' });
   }

  render() {
    const { user, messages, draftMessage } = this.state;

    return (
      <div className="Application">
        {user ? <p>Hello {user.displayName}</p> : <button onClick={() => signIn()}>Sign In</button> }
        {/* <ul>
          { this.state.messages.map(m => <li key={m.key}>{m.user.displayName}: {m.content}</li>) }
        </ul> */}
        <div className="MessageInput">
          <input
            placeholder="Message…"

            // [] Jhun Question:
            //   ⬇️ Why does this code prevent text from being entered into the field 😒 ..?
            value={this.state.draftMessage}

            onChange={(e) => this.setState({ draftMessage: e.target.value })}
          />
          <p className="charCount">{this.state.draftMessage.length}</p>
          <button onClick={() => this.addNewMessage()}>Submit</button>

          <ActionBtns id="ClearBtn" text="Clear" disabled={!this.state.draftMessage} handleClick= { () => this.emptyInputField() }
          />
        </div>
      </div>
    )
  }
}
