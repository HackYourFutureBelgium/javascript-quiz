import { state } from "../init/state.js";
import { score } from "../components/pages/quiz/score.js";

/*
 * button next should change state of previous question to answered: true
 *
 * should be triggered by next button
 * take score from data
 * if question answered correctly - add score +1 to current question
 * updates score div
 */

// re-renders score-div and appends it to body
const renderScore = (scoreState) => {
  const scoreDiv = document.getElementById("score-container");
  scoreDiv.innerHTML = "";

  const newDivScore = score(scoreState);
  scoreDiv.appendChild(newDivScore);
};

// updates data
export const updateScore = () => {
  // access array of answers of current question in data
  const currentQuestion = state.questions[state.indexOfRenderedQuestion];
  const currentQuestionAnswers = currentQuestion.answers; // array

  const questionLength = currentQuestionAnswers.length; // amount of answer options in question
  // check each answer of current question if correct = selected
  let checkedCorrect = 0;

  for (const answer of currentQuestionAnswers) {
    if (answer.correct === answer.selected) {
      checkedCorrect++;
    }
  }
  // check if all "correct"  and no "wrong" options were chosen.
  // if everything is correct, user gets 1 score.
  if (checkedCorrect === questionLength) {
    state.currentScore += 1;
  }

  renderScore(state.currentScore);
};
