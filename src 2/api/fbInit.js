import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import firebase from 'firebase';

class fbInitClass{
    static getFBInit(){
        //const firebaseInitObj = null;
        let config = {
            apiKey: "AIzaSyA0S2XqMwydPVX1Kvt0rCQj1Jg4dSz-fmM",
            authDomain: "tikaliq.firebaseapp.com",
            databaseURL: "https://tikaliq.firebaseio.com",
            storageBucket: "tikaliq.appspot.com"
        };
            
        let firebaseInitObj = firebase.initializeApp(config);
        return firebaseInitObj;
    }
}


export default fbInitClass.getFBInit().database();