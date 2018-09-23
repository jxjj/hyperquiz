export default (state) => {
  const { questionPool, answers } = state;

  // loop thru answers and tally up total points accumulated
  return Object.keys(answers).reduce((acc, questionNum) => {
    const choice = answers[questionNum];
    const { correctAnswer } = questionPool[questionNum];
    return correctAnswer === choice ? acc + 1 : acc;
  }, 0);
};
