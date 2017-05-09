import CompanyApi from '../api/CompanyApi';
import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadCompaniesSuccess(companies) {
  return { type: types.LOAD_COMPANIES_SUCCESS, companies };
}

//export function saveCompaniesSuccess() {
//  return { type: types.SAVE_COMPANIES_SUCCESS };
//}

export function saveNewCompany(companyObj) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        dispatch(beginAjaxCall());
        CompanyApi.saveCompany(companyObj)
        .then(() => {
          resolve();
        })
        .catch((e) => {
         console.log(e);
         reject(e);
        });
    })
    //dispatch(saveCompaniesSuccess(companiesList));
  };
}

export function loadCompanies(groupId) {
  let currentGroupName = groupId;
  let currentGroupObj = null;
  let groupsList = JSON.parse(localStorage.getItem("groupsList"));
  let groupIndex = 0;
  for (let item in groupsList) {
    if (groupsList[item].id === currentGroupName) {
      currentGroupObj = groupsList[item];
    }
  }

  return (dispatch, getState) => {
    dispatch(beginAjaxCall());
    let companiesList = CompanyApi.getAllCompanies(currentGroupObj);
    dispatch(loadCompaniesSuccess(companiesList));
  };
}
