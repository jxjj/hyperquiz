import { location } from "@hyperapp/router";
import data from "./data/triviaQuestions";
import getRandomIntInclusive from "./helpers/getRandomIntInclusive";
import htmlEntities from "he";
// import * as C from './constants';

const fetchTrivia = () =>
  new Promise(resolve => setTimeout(() => resolve(data), 1000));

const normalizeTriviaItem = item => {
  // eslint-disable-next-line camelcase
  const { correct_answer, incorrect_answers, question, ...rest } = item;
  const totalAnswers = incorrect_answers.length + 1;

  const randomInt = getRandomIntInclusive(0, totalAnswers);
  const questionCleaned = htmlEntities.decode(question);
  const incorrectAnswers = incorrect_answers.map(htmlEntities.decode);
  const correctAnswer = htmlEntities.decode(correct_answer);

  const choices = [
    ...incorrectAnswers.slice(0, randomInt),
    correctAnswer,
    ...incorrectAnswers.slice(randomInt)
  ];

  return {
    ...rest,
    question: questionCleaned,
    correctAnswer: correct_answer,
    incorrectAnswers: incorrect_answers,
    choices
  };
};

export default {
  location: location.actions,

  loadTriviaQuestions: () => async (state, actions) => {
    const { results } = await fetchTrivia();
    const questionPool = results.map(normalizeTriviaItem);

    actions.createQuestionPool(questionPool);
    actions.ready();
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

  ready: () => ({ ready: true })
};
