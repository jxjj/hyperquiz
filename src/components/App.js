import { h } from 'hyperapp';
import { Route, Switch } from '@hyperapp/router';
import HomePage from './HomePage';
import QuestionPage from './QuestionPage';
import ResultsPage from './ResultsPage';

import './App.css';

export default () => (
  <div id="app">
    <Switch>
      <Route path="/" render={HomePage} />
      <Route path="/q/:num" render={QuestionPage} />
      <Route path="/results" render={ResultsPage} />
      <Route render={HomePage} />
    </Switch>
  </div>
);
