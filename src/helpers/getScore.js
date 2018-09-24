import getChoiceForQuestion from './getChoiceForQuestion';
import getCorrectAnswerForQuestion from './getCorrectAnswerForQuestion';
import getPointsForQuestion from './getPointsForQuestion';

export default state => Object.keys(state.answers).reduce((acc, questionNum) => {
  const choice = getChoiceForQuestion(questionNum, state);
  const correctAnswer = getCorrectAnswerForQuestion(questionNum, state);
  const points = getPointsForQuestion(questionNum, state);
  const runningTotal = correctAnswer === choice ? acc + points : acc - points;
  return runningTotal;
}, 0);
