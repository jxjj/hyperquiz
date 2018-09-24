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

function getPointsForDifficulty(difficulty) {
  if (difficulty === 'easy') return 500;
  if (difficulty === 'medium') return 1000;
  if (difficulty === 'hard') return 2000;
  return 1;
}

function normalizeTriviaItem(origItem) {
  // clean up data from API
  const item = pipe(
    camelCasedProps,
    decodeHTMLEntities,
  )(origItem);

  // add randomized choices array
  const choices = shuffle([item.correctAnswer, ...item.incorrectAnswers]);

  // add point values
  const points = getPointsForDifficulty(item.difficulty);

  return {
    ...item,
    choices,
    points,
  };
}

export default function fetchTrivia() {
  return fetch('https://opentdb.com/api.php?amount=5&type=multiple')
    .then(res => res.json())
    .then(json => json.results.map(normalizeTriviaItem));
}
