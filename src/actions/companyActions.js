import GroupApi from '../api/CompanyApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadCompaniesSuccess(companies) {
 
  return {type: types.LOAD_COMPANIES_SUCCESS, companies};
}

export function loadCompanies(groupId) {
console.log('here')
  return (dispatch, getState) => {
   console.log('here more')
      dispatch(beginAjaxCall());
      return GroupApi.getAllCompanies(groupId).then(companies => {
         console.log('loading...',companies)
        dispatch(loadCompaniesSuccess(companies));
      }).catch(error => {
         console.log('loading ERR...',error)
        throw(error);
      });
    
  };
}