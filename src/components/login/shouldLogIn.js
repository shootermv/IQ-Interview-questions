import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as authActions from './../../actions/authActions';

class ShoulLogIn extends React.Component{
    render() {
        return (
            <div>
            <h3 className="center-align">Tikal's Technical Experience Repository</h3>
            <div className="should-login-container valign-wrapper">
                <div className="row valign-wrapper">
                    <div className="col s12 valign">
                        <div className="card blue-grey darken-1 center-align" onClick={this.props.attemptLogin}>
                            <div>
                                <i className="material-icons login-icon">perm_identity</i>
                            </div>
                            &nbsp;&nbsp; Log In With Google &nbsp;&nbsp;
                        </div>
                    </div>
                </div>
            </div>
            </div>
            );
    }
}

function mapStateToProps(appState){
	return {};
}

function mapDispatchToProps(dispatch){
	return {
		attemptLogin: function(){ dispatch(authActions.attemptLogin());}
	};
}

ShoulLogIn.propTypes = {
    attemptLogin : PropTypes.func.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(ShoulLogIn);
