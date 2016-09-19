import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import groups from './groupReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  groups,
  ajaxCallsInProgress
});

export default rootReducer;
