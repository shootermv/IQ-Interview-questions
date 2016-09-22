import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import Authpanel from './Authpanel';

const Header = ({loading, loggedin}) => {
  return (
    <nav>
      {loggedin ? <IndexLink to="/" activeClassName="active">Groups</IndexLink> : <i>&nbsp;</i>}
      {loading && <LoadingDots interval={100} dots={20}/>}

      <Authpanel/>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  loggedin: PropTypes.bool.isRequired,
};

export default Header;
