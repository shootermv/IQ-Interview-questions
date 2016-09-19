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
           <a href="#" className="thumbnail"> 
             {group.name}            
           </a> 
        </div>
  );
};

GroupListItem.propTypes = {
  group: PropTypes.object.isRequired
};

export default GroupListItem;