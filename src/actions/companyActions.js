import CompanyApi from '../api/CompanyApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadCompaniesSuccess(companies) {
  return {type: types.LOAD_COMPANIES_SUCCESS, companies};
}

export function saveCompaniesSuccess() {
  return {type: types.SAVE_COMPANIES_SUCCESS};
}

export function saveNewCompany(companyObj){
  //return (dispatch, getState) => {
      console.log("here");
      //dispatch(beginAjaxCall());
      CompanyApi.saveCompany(companyObj);
      //dispatch(saveCompaniesSuccess(companiesList));    
  //};
}

export function loadCompanies(groupId) {
  var currentGroupName = groupId;
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
      var companiesList = CompanyApi.getAllCompanies(currentGroupObj);
      dispatch(loadCompaniesSuccess(companiesList));    
  };
}