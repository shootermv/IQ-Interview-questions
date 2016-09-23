import {combineReducers} from 'redux';
import courses from './courseReducer';
import companies from './companyReducer';
import authors from './authorReducer';
import auth from './authReducer';
import groups from './groupReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import questions from './questionReducer';
const rootReducer = combineReducers({
  courses,
  authors,
  groups,
  auth,
  questions,
  companies,
  ajaxCallsInProgress
});

export default rootReducer;
