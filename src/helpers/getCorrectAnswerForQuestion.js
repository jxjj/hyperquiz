export default (questionNum, state) => state
  && state.questionPool
  && state.questionPool[questionNum]
  && state.questionPool[questionNum].correctAnswer;
