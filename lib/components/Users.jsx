import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { sortedUniqBy, uniqBy } from 'lodash';

export default class Users extends Component {
  get uniqueUsers() {
    let users = this.props.messages.map(m => {
      return { userName: m.user.displayName, id: m.user.uid, email: m.user.email};
    });
    let uniqueUsers = uniqBy(users, 'id');
    return sortedUniqBy(uniqueUsers, 'userName');
  }

  eachName(u, userClass) {
    return (
      <li
        key={u.id}
        className={userClass}
        onClick= {() => console.log({u})}>
        <p className="user-name">{u.userName.split(' ').slice(0,1)} ({u.email})</p>
      </li>
      //TODO set class for active user for the dot
    )
  }

  render() {
    let userListActiveUser = 'user-list-current-user';
    let userListUser = 'user-list-user';
    return (
      <article id="active-user-list">
        <h2>Users</h2>
        <ul>
          {this.uniqueUsers.map(u => {
            if (u.id === this.props.currentUser.uid) {
              return this.eachName(u, userListActiveUser)
            } else {
              return this.eachName(u, userListUser)
            }
          })}
        </ul>
      </article>
    )
  }
}

Users.defaultProps = {messages: []};
