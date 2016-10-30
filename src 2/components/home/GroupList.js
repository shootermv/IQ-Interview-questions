import React, {PropTypes} from 'react';
import GroupListItem from './GroupListItem';

const GroupList = ({groups}) => {
  return (
    <div className="row">

      {groups.map(group =>
        <GroupListItem key={group.id} group={group}/>
      )}
   
    </div>
  );
};

GroupList.propTypes = {
  groups: PropTypes.array.isRequired
};

export default GroupList;