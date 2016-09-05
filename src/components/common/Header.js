import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Groups</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Questions</Link>
      {" | "}
      <Link to="/about" activeClassName="active">
        <span className="glyphicon glyphicon-search"> </span> 
      </Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
