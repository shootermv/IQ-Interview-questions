import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import Authpanel from './Authpanel';

const Header = () => {

  return (
    <div>
    <nav className="header">
      <div>
      <span className="logo"> logo</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><IndexLink to="/" activeClassName="active">HOME</IndexLink></li>
          <li><IndexLink to="AddCompany" activeClassName="active">NEW COMPANY</IndexLink></li>
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
