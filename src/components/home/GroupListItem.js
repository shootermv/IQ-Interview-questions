import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const GroupListItem = ({group}) => {
    return (
        <Link to={'/companies/' + group.id}>
            <div className="col s6 m4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <br/>
                        {group.name}
                        <br/>
                    </div>
                </div>
            </div>
        </Link>
    );
};

GroupListItem.propTypes = {
    group: PropTypes.object.isRequired
};

export default GroupListItem;