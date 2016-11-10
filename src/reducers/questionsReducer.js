import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_QUESTIONS_SUCCESS:
      return action.questionsList;

    default:
      return state;
  }
}