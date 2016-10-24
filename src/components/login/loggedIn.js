import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as authActions from './../../actions/authActions';
import Header from './../common/Header';

class LoggedIn extends React.Component{
   
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>);
    }
}


export default LoggedIn;
