import { decode } from "he";
import shuffle from "./shuffle";

function decodeHTMLEntities(item) {
  const { correct_answer, incorrect_answers, question, ...rest } = item;
  return {
    ...rest,
    question: decode(question),
    correctAnswer: decode(correct_answer),
    incorrectAnswers: incorrect_answers.map(decode)
  };
}

function normalizeTriviaItem(origItem) {
  const item = decodeHTMLEntities(origItem);
  const choices = shuffle([item.correctAnswer, ...item.incorrectAnswers]);

  return {
    ...item,
    choices
  };
}

export default function fetchTrivia() {
  return fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    .then(res => res.json())
    .then(json => json.results.map(normalizeTriviaItem));
}
