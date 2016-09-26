import companyApi from '../api/CompanyApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCompaniesSuccess(companies) {
  return {type: types.LOAD_COMPANIES_SUCCESS, companies};
}

export function createCompanySuccess(company) {
  return {type: types.CREATE_COMPANY_SUCCESS, company};
}

export function loadCompanies(groupId) {
  return (dispatch, getState) => {
      dispatch(beginAjaxCall());
      return companyApi.getAllCompanies(groupId).then(companies => {
         dispatch(loadCompaniesSuccess(companies));
      }).catch(error => {
         console.log('loading ERR...',error)
         throw(error);
      });
    
  };
}

export function saveCompany(company) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return companyApi.saveCompany(company).then(company => {
      company.id ? dispatch(updateCompanySuccess(company)) :
        dispatch(createCompanySuccess(company));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}