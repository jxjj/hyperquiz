import { h } from 'hyperapp';
import { Link } from '@hyperapp/router';
import logo from '../img/hyperquiz-logo.svg';

import './AppBar.css';

export default () => (
  <header class="app-bar">
    <div class="app-bar__name">
      <Link to="/">
        <img class="app-bar__logo" src={logo} alt="HyperQuiz Logo" />
        HyperQuiz
      </Link>
    </div>
  </header>
);
