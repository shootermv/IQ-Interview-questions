import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function questionReducer(state = initialState.questions, action) {
  switch (action.type) {
    case types.LOAD_QUESTIONS_SUCCESS:
      return action.questions;

    default:
      return state;
  }
}