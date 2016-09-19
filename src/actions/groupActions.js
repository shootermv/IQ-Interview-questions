import GroupApi from '../api/mockGroupApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadGroupsSuccess(groups) {
  return {type: types.LOAD_GROUPS_SUCCESS, groups};
}

export function loadGroups() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return GroupApi.getAllGroups().then(groups => {
      dispatch(loadGroupsSuccess(groups));
    }).catch(error => {
      throw(error);
    });
  };
}