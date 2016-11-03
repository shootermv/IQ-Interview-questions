import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import Authpanel from './Authpanel';

const Header = () => {

  return (
    <div>
    <nav>
      <div className="nav-wrapper">
        <IndexLink to="/" activeClassName="active">Experience Repository</IndexLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><IndexLink to="/" activeClassName="active">Groups</IndexLink></li>
          <li><IndexLink to="AddCompany" activeClassName="active">Add New Company</IndexLink></li>
          <li><Authpanel/></li>
        </ul>
      </div>
    </nav>
    <div style={{backgroundColor:"black",height:"5px", marginBottom:"20px"}}></div>
    </div>
  
  );
};

Header.propTypes = {
  loggedin: PropTypes.bool.isRequired
};

export default Header;
