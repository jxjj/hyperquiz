import { h } from 'hyperapp';
import { Link } from '@hyperapp/router';

export default () => state =>
  (state.questionPool.length ? (
    <div class="home-page">
      <Link to="/q/0">Start Game</Link>
    </div>
  ) : (
    <div class="home-page">Loading...</div>
  ));
