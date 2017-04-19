import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import viewQuestionsApi from '../api/viewQuestionsApi.js';

export function loadQuestionsSuccess(questionsList) {
  return { type: types.LOAD_QUESTIONS_SUCCESS, questionsList };
}

export function loadQuestions(companyName) {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return viewQuestionsApi.getAllQuestionsByCompanyName(companyName).then(questionsList => {
      dispatch(loadQuestionsSuccess(questionsList));
    }).catch(error => {
      throw (error);
    });
  };
}