import { h } from "hyperapp";
import { Link } from "@hyperapp/router";
import getScore from "../helpers/getScore";

export default () => (state, actions) => (
  <div class="results-page">
    <h1>Final Score</h1>

    <p>{getScore(state)}</p>
    <button onclick={() => actions.startNewGame()}>Play Again</button>
  </div>
);
