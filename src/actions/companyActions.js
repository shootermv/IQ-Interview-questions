import GroupApi from '../api/mockCompanyApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadCompaniesSuccess(companies) {
 
  return {type: types.LOAD_COMPANIES_SUCCESS, companies};
}

export function loadCompanies() {
console.log('here')
  return (dispatch, getState) => {
   console.log('here more')
      dispatch(beginAjaxCall());
      return GroupApi.getAllCompanies().then(companies => {
         console.log('loading...',companies)
        dispatch(loadCompaniesSuccess(companies));
      }).catch(error => {
         console.log('loading ERR...',error)
        throw(error);
      });
    
  };
}