import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

export default () => (state, actions) => (
  <div class="home-page">
    <button onclick={() => actions.startNewGame()}>Start New Game</button>
  </div>
);
