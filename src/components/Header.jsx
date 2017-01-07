import React from 'react';

const Header = (props) => {
  const {
    handleRedirect,
  } = props;

  return (
    <div className="app-header">
      <div className="app-header-logo">
        The Artisanals
      </div>
      <div className="app-header-nav">
        <span onClick={() => handleRedirect('home')}>Home</span>
        <span onClick={() => handleRedirect('music')}>Music</span>
        <span onClick={() => handleRedirect('tour')}>Tour</span>
        <span onClick={() => handleRedirect('about')}>About</span>
      </div>
    </div>
  );
};

Header.propTypes = {
  handleRedirect: React.PropTypes.func,
}

export default Header;
