import { h } from "hyperapp";
import isQuestionComplete from "../helpers/isQuestionComplete";
import getChoiceForQuestion from "../helpers/getChoiceForQuestion";
import getCorrectAnswerForQuestion from "../helpers/getCorrectAnswerForQuestion";
import Choice from "./Choice";

export default ({ questionNum }) => (state, actions) => {
  const { choices } = state.questionPool[questionNum];
  const isComplete = isQuestionComplete(questionNum, state);
  const choice = getChoiceForQuestion(questionNum, state);
  const correctAnswer = getCorrectAnswerForQuestion(questionNum, state);

  return (
    <div class="choice-list">
      {choices.map(item => (
        <Choice
          text={item}
          isCorrect={item === correctAnswer}
          isSelected={item === choice}
          isComplete={isComplete}
          disabled={isComplete}
          onclick={() => actions.submitAnswer({ questionNum, choice: item })}
        />
      ))}
    </div>
  );
};
