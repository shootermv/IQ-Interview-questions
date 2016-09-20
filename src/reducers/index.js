import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import auth from './authReducer';
import groups from './groupReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  groups,
  auth,
  ajaxCallsInProgress
});

export default rootReducer;
