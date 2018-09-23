import { location } from "@hyperapp/router";
import fetchTrivia from "./helpers/fetchTrivia";
import initialState from "./state";

export default {
  location: location.actions,

  fetchTriviaQuestions: () => async (state, actions) => {
    const questionPool = await fetchTrivia();
    actions.createQuestionPool(questionPool);
  },

  createQuestionPool: questionPool => ({ questionPool }),

  submitAnswer: ({ questionNum, choice }) => state => {
    const answers = {
      ...state.answers,
      [questionNum]: choice
    };
    console.log(answers);
    return { answers };
  },

  ready: () => ({ ready: true }),
  loadNewGame: () => async (state, actions) => {
    actions.reset();
    await actions.fetchTriviaQuestions();
    actions.ready();
  },

  reset: () => ({ ...initialState })
};
