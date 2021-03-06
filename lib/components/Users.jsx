/*jshint esversion: 6 */
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
    const { filterByUser } = this.props;
    return (
      <li
        key={u.id}>
        <p
          onClick={() => { filterByUser(u) }}
          tabIndex="0"
          className="user-name"
          >{u.userName.split(' ').slice(0,1)} <span className="user-email"> ({u.email})</span>
          <svg className={userClass}>
            <circle cx={8} cy={8} r={6} fill="#D25503" />
          </svg>
        </p>
      </li>
    )
  }

  render() {
    let userListActiveUser = 'user-list-current-user';
    let userListUser = 'user-list-user';
    return (
      <article id="active-user-list">
        <h2 tabIndex="0" >Users</h2>
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

Users.defaultProps = {messages: [], filterByUser: []};
