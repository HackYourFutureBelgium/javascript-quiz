import { divResults } from "../components/pages/quiz/div-results.js";
import { state } from "../init/state.js";

export const loadResults = () => {
  // clean container
  const container = document.querySelector(".body");
  container.innerHTML = "";

  // take from data: number of correct answers, number of questions
  const correct = state.currentScore;
  const numberOfQu = state.numberOfTotalQuestions;
  //  render div with results
  const showResults = divResults(correct, numberOfQu);
  container.appendChild(showResults);
};
