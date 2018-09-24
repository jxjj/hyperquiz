import { h } from 'hyperapp';
import './HomePage.css';
import tristars from '../img/tristars.svg';
import logo from '../img/hyperquiz-logo.svg';

export default () => (state, actions) => (
  <div class="home-page">
    <header class="home-page__page-header">
      <img class="tristars" src={tristars} alt="stars" />
      <h1 class="app-name">
        <div class="line">
          <img class="app-name__logo" src={logo} alt="HyperQuiz Logo" />
          Hyper
        </div>
        <div class="line">Quiz</div>
      </h1>
    </header>

    <button class="start-button" onclick={() => actions.startNewGame()}>
      Start
    </button>
  </div>
);
