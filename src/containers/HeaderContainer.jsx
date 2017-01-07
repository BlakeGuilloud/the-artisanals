import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header } from '../components';
import * as BandsActions from '../actions/BandsActions';

class HeaderContainer extends React.Component {
  static displayName = 'HeaderContainer';

  static propTypes = {};

  state = {};

  componentDidMount() {
    this.props.fetchTour();
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
  return {
    fetchTour: bindActionCreators(BandsActions.fetchTour, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
