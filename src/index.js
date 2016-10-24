/*eslint-disable import/default */

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, Route , browserHistory } from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import {loadGroups} from './actions/groupActions';
import {loadQuestions} from './actions/questionActions';
import {startListeningToAuth}  from './actions/authActions';


import '../node_modules/materialize-css/dist/css/materialize.css';
import '../node_modules/materialize-css/dist/js/materialize.js';
import './styles/styles.css'; 

const store = configureStore();
//store.dispatch(loadQuestions());
//store.dispatch(loadAuthors());
//store.dispatch(loadGroups());
//auth:
store.dispatch(startListeningToAuth());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}>
    </Router>
  </Provider>,
  document.getElementById('app')
);
