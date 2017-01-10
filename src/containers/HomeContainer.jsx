import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class HomeContainer extends React.Component {
  static displayName = 'HomeContainer';

  static propTypes = {};

  state = {};

  render() {
    const data = [
      {
        title: 'New album!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'http://fillmurray.com/200/300',
      },
      {
        title: 'New Tour!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'http://fillmurray.com/300/300',
      },
    ]
    const props = {};

    return (
      <div className="app-content">
        <img className="app-content-img" src="http://fillmurray.com/1000/200" alt=""/>
        {data.map((item, idx) => {
          return (
            <div key={idx} className="app-home-preview">
              <div>{item.title}</div>
              <div>{item.content}</div>
              <img src={item.image} alt=""/>
            </div>
          );
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
