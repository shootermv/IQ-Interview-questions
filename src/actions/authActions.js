import * as types from './actionTypes';
import firebase from 'firebase';
import {loadGroups} from './groupActions';
const provider = new firebase.auth.GoogleAuthProvider();


export function attemptLogin() {
    return (dispatch, getState) => {
		dispatch({type:types.ATTEMPTING_LOGIN});
        firebase.auth().signInWithPopup(provider).then(authData => {
        if(authData.user.email.indexOf('tikalk') === -1){
            alert('cant log in - only tikal member can do so');
            dispatch(this.logoutUser());
        }
        }).catch(error => {
             dispatch({type:types.DISPLAY_ERROR, error:"Login failed! "+error});
             dispatch({type:types.LOGOUT});
        });
    };
}

export function logoutUser() {
		return (dispatch,getState) => {			
			firebase.auth().signOut().then(() => { 
                 //dispatch({type:types.LOGOUT}); // don't really need to do this, but nice to get immediate feedback   
            });
		};
}

export function startListeningToAuth() {
    return (dispatch, getState) => {
        dispatch({type:types.LOGOUT});
        firebase.auth().onAuthStateChanged((authData)=>{
            if (authData){
                dispatch({
                    type: types.LOGIN_USER,
                    uid: authData.uid,
                    username: authData.displayName,
                    photoURL: authData.photoURL
                });
                dispatch(loadGroups()); 
            } else {
                if (getState().auth.currently !== 'ANONYMOUS'){ // log out if not already logged out
                    dispatch({type:types.LOGOUT});
                }
            }
        });
    }; 
}