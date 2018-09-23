import { decode } from 'he';
import { pipe } from 'ramda';
import shuffle from './shuffle';

function decodeHTMLEntities({
  question, correctAnswer, incorrectAnswers, ...rest
}) {
  return {
    ...rest,
    question: decode(question),
    correctAnswer: decode(correctAnswer),
    incorrectAnswers: incorrectAnswers.map(decode),
  };
}

// eslint-disable-next-line camelcase
function camelCasedProps({ incorrect_answers, correct_answer, ...rest }) {
  return {
    ...rest,
    correctAnswer: correct_answer,
    incorrectAnswers: incorrect_answers,
  };
}

function normalizeTriviaItem(origItem) {
  // clean up data from API
  const item = pipe(
    camelCasedProps,
    decodeHTMLEntities,
  )(origItem);

  // add randomized choices array
  const choices = shuffle([item.correctAnswer, ...item.incorrectAnswers]);

  return {
    ...item,
    choices,
  };
}

export default function fetchTrivia() {
  return fetch('https://opentdb.com/api.php?amount=5&type=multiple')
    .then(res => res.json())
    .then(json => json.results.map(normalizeTriviaItem));
}
