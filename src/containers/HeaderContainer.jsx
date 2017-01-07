import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import { Header } from '../components';
import { headerAnimation } from '../helpers/AnimationHelpers';

class HeaderContainer extends React.Component {
  static displayName = 'HeaderContainer';

  static propTypes = {};

  state = {};

  handleRedirect = (path) => {
    return hashHistory.push(path);
  }

  componentDidMount() {
    headerAnimation();
  }

  render() {
    const props = {
      handleRedirect: this.handleRedirect,
    };

    return (
      <Header {...props} />
    );
  }
}

function mapStateToProps(state) {
  const { example } = state;
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
