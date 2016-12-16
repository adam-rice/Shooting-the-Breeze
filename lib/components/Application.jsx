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
              <li className="msg-list-item">
                <h5>{moment().format('MMMM D, h:mma')}</h5>
                <h6>Andy</h6>
                <p className="msg-text" >I like to do the cha cha!</p>
              </li>
              <li className="msg-list-item">
                <h5>{moment().format('MMMM D, h:mma')}</h5>
                <h6>Andy</h6>
                <p className="msg-text">Get me my lotion! Get me my lotion! Get me my lotion! Get me my lotion! Get me my lotion! Get me my lotion! Get me my lotion! Get me my lotion!</p>
              </li>
            </ul>
          </article>
          <article id="active-user-list">
            <h2>Users</h2>
            <ul>
              <li className="active-user-list-item" >
                <p className="user-name">Andy (an@happyFINGERS.io)</p>
              </li>
              <li className="active-user-list-item" >
                <p className="user-name">Billy (bg@happyFINGERS.io)</p>
              </li>
            </ul>
          </article>
        </section>
        <Controls />
        {user ? <p>Hello {user.displayName}</p> : <button onClick={() => signIn()}>Sign In</button> }
      </div>
    )
  }
}
