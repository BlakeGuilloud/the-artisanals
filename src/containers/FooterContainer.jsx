import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class FooterContainer extends React.Component {
  static displayName = 'FooterContainer';

  static propTypes = {};

  state = {};

  render() {
    const props = {};

    return (
      <div className="app-footer">
        <div className="app-footer-social">
          <a href="facebook.com">
            <i className="fa fa-facebook-official" aria-hidden="true"></i>
          </a>
          <a href="google.com">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
        <div className="app-footer-logo">
          The Artisnals
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

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
