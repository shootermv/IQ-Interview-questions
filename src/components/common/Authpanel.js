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

        return (
            <div className="auth-panel">
                <img src={auth.photoURL} alt="user photo url" className="circle responsive-img login-img"/>
                <span className="login-username">{auth.username} &nbsp;</span>
                <span className="logout" onClick={this.props.logoutUser}>logout</span>
            </div>
        );

    }
}

function mapStateToProps(appState) {
    // This component will have access to `appState.auth` through `this.props.auth`
    return {auth: appState.auth};
}

function mapDispatchToProps(dispatch) {
    return {
        attemptLogin: function () {
            dispatch(authActions.attemptLogin());
        },
        logoutUser: function () {
            dispatch(authActions.logoutUser());
        }
    };
}

Authpanel.propTypes = {
    auth: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired,
    attemptLogin: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Authpanel);