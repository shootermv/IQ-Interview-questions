import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CompaniesPage from './components/company/CompaniesPage';
import AboutPage from './components/about/AboutPage';
import QuestionsPage from './components/course/QuestionsPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="companies/:groupId" component={CompaniesPage} />
    <Route path="courses" component={QuestionsPage} />
    <Route path="company" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
