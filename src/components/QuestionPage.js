import { h } from 'hyperapp';
import { Link } from '@hyperapp/router';
import ChoiceList from './ChoiceList';
import AppBar from './AppBar';
import getScore from '../helpers/getScore';
import getChoiceForQuestion from '../helpers/getChoiceForQuestion';
import getCorrectAnswerForQuestion from '../helpers/getCorrectAnswerForQuestion';
import isQuestionComplete from '../helpers/isQuestionComplete';

import './QuestionPage.css';

const getStatusMessage = (questionNum, state) => {
  if (!isQuestionComplete(questionNum, state)) return '';

  const choice = getChoiceForQuestion(questionNum, state);
  const correctAnswer = getCorrectAnswerForQuestion(questionNum, state);
  return choice === correctAnswer ? 'Correct!' : 'WRONG!';
};

const renderNextLink = (questionNum, state) => {
  const totalQuestions = state.questionPool.length;
  const nextQuestionNum = Number.parseInt(questionNum, 10) + 1;
  if (nextQuestionNum >= totalQuestions) {
    return <Link to="/results">See Results</Link>;
  }
  return <Link to={`/q/${nextQuestionNum}`}>Next</Link>;
};

const renderDifficulty = (difficulty) => {
  if (difficulty === 'easy') return '⭑';
  if (difficulty === 'medium') return '⭑⭑';
  if (difficulty === 'hard') return '⭑⭑⭑';
  return '?';
};

export default ({ match }) => (state) => {
  const { num } = match.params;
  const questionItem = state.questionPool[num];

  if (!num || !questionItem) {
    return <p>Loading...</p>;
  }

  const { category, question, difficulty } = questionItem;
  const isComplete = isQuestionComplete(num, state);

  return (
    <div class="question-page">
      <AppBar />
      <div class="score-board">
        <h2 class="score-board__heading">Score</h2>
        <p class="score-board__points">{getScore(state)}</p>
      </div>
      <div class="container">
        <div class="question">
          <h2 class="question__number">{match.params.num}</h2>
          <div class="question__main">
            <div class="question__meta">
              <p class="question__category">{category}</p>
              <p class="question__difficulty">{renderDifficulty(difficulty)}</p>
            </div>
            <div class="question__prompt">{question}</div>
          </div>
        </div>

        <div class="question__choices">
          <ChoiceList questionNum={num} />
          {/* Timer goes here */}
        </div>

        {isComplete ? <div class="question__status">{getStatusMessage(num, state)}</div> : ''}

        <nav class="question__nav">{isComplete ? renderNextLink(num, state) : ''}</nav>
      </div>
    </div>
  );
};
