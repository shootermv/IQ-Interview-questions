import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import firebase from 'firebase';
import config from '../firebase/config';
class fbInitClass{
    static getFBInit(){
        //const firebaseInitObj = null
            
        let firebaseInitObj = firebase.initializeApp(config);
        return firebaseInitObj;
    }
}


export default fbInitClass.getFBInit().database();