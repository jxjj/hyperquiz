import getChoiceForQuestion from './getChoiceForQuestion';
import getCorrectAnswerForQuestion from './getCorrectAnswerForQuestion';
import getPointsForQuestion from './getPointsForQuestion';

export default state => Object.keys(state.answers).reduce((acc, questionNum) => {
  const choice = getChoiceForQuestion(questionNum, state);
  const correctAnswer = getCorrectAnswerForQuestion(questionNum, state);
  const points = getPointsForQuestion(questionNum, state);
  return correctAnswer === choice ? acc + points : acc;
}, 0);
