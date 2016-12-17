import React, { Component } from 'react'
import firebase, { reference, signIn, signOut } from '../firebase';
import { pick, map, extend } from 'lodash';
import Controls from './Controls';
import Filters from './Filters';
import EnterLeave from './EnterLeave';
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
    // const { user, draftMessage } = this.state;
    const user = this.props.user
    const draftMessage = this.state.draftMessage

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

 footer(user) {
   if (this.state.user === null) {
     return (
       <div></div>)
   } else {
     return (
       <div
         id="message-maker">
         <input
           value={this.state.draftMessage}
           onChange={(e) => this.setState({ draftMessage: e.target.value })}
           id="msg-input"
           placeholder="Message"/>
         <p id="char-count">{this.state.draftMessage.length}</p>
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
     </div>
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
        <EnterLeave signInFunction={signIn} signOutFunction={signOut} user={this.state.user}/>
        {/* <footer>
         {this.footer()}
       </footer> */}
      </div>
    )
  }
}
