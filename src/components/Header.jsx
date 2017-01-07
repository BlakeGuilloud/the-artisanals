import React, { Component } from 'react';

export default class Header extends Component {
  static displayName = 'Header';

  static propTypes = {}

  state = {};

  render() {
    return (
      <div className="app-header">
        <div className="app-header-logo">
          The Artisnals
        </div>
        <div className="app-header-nav">
          <span>Home</span>
          <span>Music</span>
          <span>Tour</span>
          <span>About</span>
        </div>
      </div>
    );
  }
}
