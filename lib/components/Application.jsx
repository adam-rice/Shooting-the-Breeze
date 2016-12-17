import React, { Component } from 'react'
import firebase, { reference, signIn, signOut } from '../firebase';
import { pick, map, extend } from 'lodash';
import Filters from './Filters';
import EnterLeave from './EnterLeave';
import MessageInput from './MessageInput';
import CharacterCount from './CharacterCount';
import SubmitButton from './SubmitButton';
import ClearButton from './ClearButton';
import Messages from './Messages';
import Users from './Users';
import moment from 'moment';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      draftMessage: '',
      user: null,
      filteredMessages: []
      // TODO filterString???
    };
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
    const { user, draftMessage } = this.state;
    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: moment().format('MMMM D, h:mma')
      // TODO mobile version of date
    });
    this.setState({ draftMessage: '' });
  }

  setMsgState(e) {
    this.setState( {draftMessage: e.target.value} );
  }

  clearMsg(){
   this.setState({draftMessage: ''});
 }

 // TODO filter message&user methods

 // TODO sort messages methods

 createFooter(user, draftMessage) {
  if (this.state.user === null) {
    return (<div id="blank-footer"></div>)
    } else {
      return (
        <footer>
          <MessageInput
            draftMessageProp={this.state.draftMessage} stateProp={this.setMsgState.bind(this)}/>
          <CharacterCount
            draftMessageProp={this.state.draftMessage}/>
          <SubmitButton
            draftMessageProp={this.state.draftMessage} addMessageFunction={this.addNewMessage.bind(this)}/>
          <ClearButton
            draftMessageProp={this.state.draftMessage} clearMessageFunction={this.clearMsg.bind(this)}/>
        </footer>
      )
    }
  }

  render() {
    const { user, messages, draftMessage, filteredMessages } = this.state;
    return (
      <div>
        <Filters />
        <section id="body">
          <article id="message-section">
            <Messages
              messages={this.state.messages} />
          </article>
          <Users
            messages={this.state.messages}
            currentUser={this.state.user}/>
        </section>
        <EnterLeave
          signInFunction={signIn}
          signOutFunction={signOut}
          user={this.state.user}/>
        <div>
         {this.createFooter()}
       </div>
      </div>
    )
  }
}
