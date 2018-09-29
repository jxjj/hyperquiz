import '@babel/polyfill';
import { app } from 'hyperapp';
import { location } from '@hyperapp/router';
import { withFx } from '@hyperapp/fx';
import devtools from 'hyperapp-redux-devtools';
import { pipe } from 'ramda';
import actions from './actions';
import state from './state';
import view from './components/App';

function onMount(main) {
  location.subscribe(main.location);
  main.restoreState();
}

const main = pipe(
  devtools,
  // withFx,
)(app)(state, actions, view, document.body);

onMount(main);
