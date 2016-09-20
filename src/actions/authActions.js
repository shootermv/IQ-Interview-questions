import * as types from './actionTypes';
import firebase from 'firebase';
const provider = new firebase.auth.GoogleAuthProvider();


export function attemptLogin() {
    return (dispatch, getState) => {
		dispatch({type:types.ATTEMPTING_LOGIN});
        firebase.auth().signInWithPopup(provider).then(authData => {
        //nothing here yet
        }).catch(error => {
             dispatch({type:types.DISPLAY_ERROR, error:"Login failed! "+error});
             dispatch({type:types.LOGOUT});
        });
    };
}

export function logoutUser() {
		return (dispatch,getState) => {			
			firebase.auth().signOut().then(() => { 
                 dispatch({type:types.LOGOUT}); // don't really need to do this, but nice to get immediate feedback   
            });
		};
}

export function startListeningToAuth() {
    return (dispatch, getState) => {
        
        dispatch({type:types.LOGOUT});
        firebase.auth().onAuthStateChanged((authData)=>{
            if (authData){
                //console.log('auth: ',authData) 
                dispatch({
                    type: types.LOGIN_USER,
                    uid: authData.uid,
                    username: authData.displayName 
                });
            } else {
                if (getState().auth.currently !== 'ANONYMOUS'){ // log out if not already logged out
                    dispatch({type:types.LOGOUT});
                }
            }
        });
    }; 
}