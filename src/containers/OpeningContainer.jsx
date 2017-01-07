import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import * as AnimationHelpers from '../helpers/AnimationHelpers';

class OpeningContainer extends React.Component {
  static displayName = 'OpeningContainer';

  static propTypes = {};

  state = {};

  componentDidMount() {
    AnimationHelpers.logoAnimation();
  }

  handleRedirect = () => {
    return hashHistory.push('home');
  }

  render() {
    const props = {};

    return (
      <div className="app-opening">
        <div className="app-opening-logo">
          <span onClick={this.handleRedirect}>The Artisnals</span>
        </div>
      </div>
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
    // example: bindActionCreators(ExampleActions.exampleFunction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OpeningContainer);
