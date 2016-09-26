import GroupApi from '../api/mockCompanyApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadCompaniesSuccess(companies) {
 
  return {type: types.LOAD_COMPANIES_SUCCESS, companies};
}

export function loadCompanies(a) {
  console.log('here', localStorage.getItem("currentGroup"));
  var currentGroupName = localStorage.getItem("currentGroup");
  var currentGroupObj = null;
  var groupsList = JSON.parse(localStorage.getItem("groupsList"));
  var groupIndex = 0;
  for (var item in groupsList){
    if(groupsList[item].id === currentGroupName){
      currentGroupObj = groupsList[item];
    }
  }
  return (dispatch, getState) => {
      dispatch(beginAjaxCall());
      var companiesList = GroupApi.getAllCompanies(currentGroupObj);
      console.log(companiesList);
       dispatch(loadCompaniesSuccess(companiesList));    
  };
}