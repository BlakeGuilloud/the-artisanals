import React, { Component } from 'react';

export default class Header extends Component {
  static displayName = 'Header';

  static propTypes = {}

  state = {};

  render() {
    return (
      <div className="app-header">
        <div id="app-header__menu" className="app-header__menu">
          <div className="app-header__menu__bar" />
          <div className="app-header__menu__bar" />
          <div className="app-header__menu__bar" />
        </div>
        The Artisnals
      </div>
    );
  }
}
