import React, {PropTypes} from 'react';
import { IndexLink } from 'react-router';
import Authpanel from './Authpanel';


const Header = () => {
  return (
    <div className="header-container">
    <nav className="header">
      <div>
      <span className="logo"><img src={require('../../img/logo.png')} /></span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><IndexLink to="/" activeClassName="active">HOME</IndexLink></li>
          <li><Authpanel/></li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

Header.propTypes = {
  loggedin: PropTypes.bool.isRequired
};

export default Header;
