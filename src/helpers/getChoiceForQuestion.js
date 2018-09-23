import isQuestionComplete from './isQuestionComplete';

export default (questionNum, state) => {
  if (!isQuestionComplete(questionNum, state)) return null;
  const choice = state.answers[questionNum];
  return choice;
};
