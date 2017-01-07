import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HeaderContainer, FooterContainer } from './';

class App extends React.Component {
  static displayName = 'App';

  static propTypes = {
    children: React.PropTypes.node,
  };

  state = {};

  render() {
    return (
      <div>
        {location.hash === '#/' ? null : <HeaderContainer />}

        {this.props.children}

        {location.hash === '#/' ? null : <FooterContainer />}
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
