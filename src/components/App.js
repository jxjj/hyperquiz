import { h } from 'hyperapp';
import { Link, Route, Switch } from '@hyperapp/router';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Topic = () => <h2>Topic</h2>;

export default () => (
  <div id="app">
    <header class="app-bar">HyperQuiz</header>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route path="/" render={Home} />
        <Route path="/about" render={About} />
        <Route path="/topics" render={Topic} />
        <Route render={Home} />
      </Switch>
    </div>
  </div>
);
