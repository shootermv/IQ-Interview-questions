import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const GroupListItem = ({group}) => {
  var divStyle = {
    height: '180px',
    width: '100%',
    display: 'block'
  };
  return (
        <div className="col-md-3 col-xs-6">
           <Link to={'/companies/' + group.id} className="thumbnail">
             {group.name}
           </Link>
        </div>
  );
};

GroupListItem.propTypes = {
  group: PropTypes.object.isRequired
};

export default GroupListItem;