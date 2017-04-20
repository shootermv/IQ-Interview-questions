import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as groupActions from '../../actions/groupActions';
import GroupList from './GroupList';

//more
class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { groups } = this.props;
    return (
      <div className="jumbotron">
        {groups.length > 0 && <h1>Groups</h1>}
        <GroupList groups={groups} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    groups: state.groups
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(groupActions, dispatch)
  };
}

HomePage.propTypes = {
  groups: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);