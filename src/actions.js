import { location } from '@hyperapp/router';
import fetchTrivia from './helpers/fetchTrivia';
import initialState from './state';

const LOCALSTORAGE_KEY = 'hyperquiz/v1';

export default {
  location: location.actions,

  /**
   * fetches a new question
   */
  fetchTriviaQuestions: () => async (state, actions) => {
    const questionPool = await fetchTrivia();
    actions.createQuestionPool(questionPool);
    actions.saveState();
  },

  createQuestionPool: questionPool => ({ questionPool }),

  submitAnswer: ({ questionNum, choice }) => (state, actions) => {
    const answers = {
      ...state.answers,
      [questionNum]: choice,
    };
    actions.update({ answers });
    actions.saveState();
  },

  update: data => data,

  startNewGame: () => async (state, actions) => {
    actions.reset();
    await actions.fetchTriviaQuestions();
    actions.location.go('/q/0');
  },

  reset: () => initialState,

  saveState: () => ({ questionPool, answers }) => {
    try {
      const serializedState = JSON.stringify({ questionPool, answers });
      sessionStorage.setItem(LOCALSTORAGE_KEY, serializedState);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  },

  restoreState: () => {
    try {
      const serializedState = sessionStorage.getItem(LOCALSTORAGE_KEY);
      const savedState = JSON.parse(serializedState);
      return savedState;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      return undefined;
    }
  },
};
