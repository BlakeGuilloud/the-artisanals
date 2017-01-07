import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header } from '../components';
import { headerAnimation } from '../helpers/AnimationHelpers';

class HeaderContainer extends React.Component {
  static displayName = 'HeaderContainer';

  static propTypes = {};

  state = {};

  componentDidMount() {
    headerAnimation();
  }

  render() {
    const props = {};

    return (
      <Header {...props} />
    );
  }
}

function mapStateToProps(state) {
  const { example } = state;
  return {
    // example: example.examples,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
