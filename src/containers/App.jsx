import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HeaderContainer } from './';

class App extends React.Component {
  static displayName = 'App';

  static propTypes = {
    children: React.PropTypes.node,
  };

  state = {};

  render() {
    console.log('hello woreld');
    return (
      <div>
        <HeaderContainer />

        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {} = state;

  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
