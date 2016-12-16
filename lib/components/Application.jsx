import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import Controls from './Controls';
import Filters from './Filters';
import moment from 'moment';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: null  //go away
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

  render() {
    const { user, messages, draftMessage } = this.state;
    return (
      <div>
        <Filters />
        <section id="body">
          <article id="message-section">
            <ul>
              <li>
                <h5>{moment().format('MMMM D, h:mma')}</h5>
                <h6>Andy</h6>
                <p>I like to do the cha cha!</p>
              </li>
              <li>
                <h5>{moment().format('MMMM D, h:mma')}</h5>
                <h6>Andy</h6>
                <p>Get me my lotion!</p>
              </li>
            </ul>
          </article>
          <article id="active-user-list">
            <h2>Users</h2>
          </article>
        </section>
        <Controls />
        {user ? <p>Hello {user.displayName}</p> : <button onClick={() => signIn()}>Sign In</button> }
      </div>
    )
  }
}
