import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/authActions';
import * as types from '../../actions/actionTypes';

class Authpanel extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    const {auth} = this.props;
    switch(auth.currently) {
        case types.LOGIN_USER :
        return (<a className="pull-right" onClick={this.props.logoutUser}>hi {auth.username}</a>);
        case types.AWAITING_AUTH_RESPONSE :
        return (<a className="pull-right"><i className="fa fa-spinner fa-spin"></i> authenticating...</a>);      
       default: return <a className="pull-right" onClick={this.props.attemptLogin}>Log in</a>;
    }
  }
}

function mapStateToProps(appState){
	// This component will have access to `appState.auth` through `this.props.auth`
	return {auth:appState.auth};
}

function mapDispatchToProps(dispatch){
	return {
		attemptLogin: function(){ dispatch(authActions.attemptLogin()); },
		logoutUser: function(){ dispatch(authActions.logoutUser()); }
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(Authpanel);