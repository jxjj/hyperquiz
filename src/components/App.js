import { h } from 'hyperapp';
import { Route, Switch, Link } from '@hyperapp/router';
import HomePage from './HomePage';
import QuestionPage from './QuestionPage';
import ResultsPage from './ResultsPage';

export default () => (
  <div id="app">
    <header className="app-bar">
      <Link to="/">HyperQuiz</Link>
    </header>
    <Switch>
      <Route path="/" render={HomePage} />
      <Route path="/q/:num" render={QuestionPage} />
      <Route path="/results" render={ResultsPage} />
      <Route render={HomePage} />
    </Switch>
  </div>
);
