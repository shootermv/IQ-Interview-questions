import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadQuestionsSuccess(questions) {
  return { type: types.LOAD_QUESTIONS_SUCCESS, questions};
}

export function loadQuestions() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(questions => {
      dispatch(loadQuestionsSuccess(questions));
    }).catch(error => {
      throw(error);
    });
  };
}