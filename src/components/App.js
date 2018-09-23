import { h } from "hyperapp";
import { Route, Switch } from "@hyperapp/router";
import HomePage from "./HomePage";
import QuestionPage from "./QuestionPage";
import ResultsPage from "./ResultsPage";

export default () => (state, actions) => (
  <div id="app" oncreate={() => actions.loadTriviaQuestions()}>
    <header class="app-bar">HyperQuiz</header>
    {!state.ready ? (
      "Loading..."
    ) : (
      <Switch>
        <Route path="/" render={HomePage} />
        <Route path="/q/:num" render={QuestionPage} />
        <Route path="/results" render={ResultsPage} />
        <Route render={HomePage} />
      </Switch>
    )}
  </div>
);
