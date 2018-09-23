import { h } from "hyperapp";
import { Link } from "@hyperapp/router";
import ChoiceList from "./ChoiceList";
import getScore from "../helpers/getScore";
import getChoiceForQuestion from "../helpers/getChoiceForQuestion";
import getCorrectAnswerForQuestion from "../helpers/getCorrectAnswerForQuestion";
import isQuestionComplete from "../helpers/isQuestionComplete";

const getStatusMessage = (questionNum, state) => {
  if (!isQuestionComplete(questionNum, state)) return "";

  const choice = getChoiceForQuestion(questionNum, state);
  const correctAnswer = getCorrectAnswerForQuestion(questionNum, state);
  return choice === correctAnswer ? "Correct!" : "WRONG!";
};

const renderNextLink = (questionNum, state) => {
  const totalQuestions = state.questionPool.length;
  const nextQuestionNum = Number.parseInt(questionNum, 10) + 1;
  if (nextQuestionNum >= totalQuestions) {
    return <Link to="/results">See Results</Link>;
  } else {
    console.log("next link");
    return <Link to={`/q/${nextQuestionNum}`}>Next Question</Link>;
  }
};

export default ({ match }) => state => {
  const { num } = match.params;
  const numInt = Number.parseInt(num, 10);
  const questionItem = state.questionPool[num];
  const { category, question, difficulty, choices } = questionItem;
  const choice = getChoiceForQuestion(num, state);
  const isComplete = isQuestionComplete(num, state);

  if (!num || !questionItem) return <div>Loading...</div>;

  return (
    <div class="question-page">
      <p>Score: {getScore(state)}</p>
      <h1>Question {match.params.num}</h1>
      <p>{category}</p>
      <p>{difficulty}</p>
      <p>{question}</p>

      <ChoiceList questionNum={num} />

      <div class="question-status">{getStatusMessage(num, state)}</div>

      {isComplete ? renderNextLink(num, state) : ""}
    </div>
  );
};
