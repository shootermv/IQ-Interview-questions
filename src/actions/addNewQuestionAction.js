import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import addQuestionsApi from '../api/addNewQuestionApi.js';

export function saveNewQuestionsSuccess(questionsList) {
  return { type: types.LOAD_QUESTIONS_SUCCESS, questionsList};
}

export function saveNewQuestion(questionObj, groupName, companyName) {
  return (dispatch, getState) => {
    addQuestionsApi.saveNewQuestion(questionObj, groupName, companyName);
  };
}