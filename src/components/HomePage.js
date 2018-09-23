import { h } from 'hyperapp';

export default () => (state, actions) => (
  <div class="home-page">
    <button onclick={() => actions.startNewGame()}>Start New Game</button>
  </div>
);
