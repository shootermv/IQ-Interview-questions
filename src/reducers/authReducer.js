import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case types.LOGOUT:
        return {
            currently: types.ANONYMOUS,
            username: "guest",
            uid: null
        };
    case types.LOGIN_USER:
        return {
            currently: types.LOGIN_USER,
            username: action.username,
            uid: action.uid,
            photoURL: action.photoURL
        };    
    default:
      return state;
  }
}