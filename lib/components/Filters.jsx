import React, { Component } from 'react';

export default class Filters extends React.Component{
  render() {
    return (
      <header>
        <h1>Shoot the Breeze</h1>
        <input id="filter-input" placeholder="Filter"></input>
        <section id="sort-btn-section">
          <input className="btn" type="button" value="Sort Up"></input>
          <input className="btn" type="button" value="Sort Down"></input>
        </section>
      </header>
    )
  }
 }
