import { data } from "../../data/quiz.js";
import { quizQuestionPanel } from "../components/pages/quiz/quiz-question-panel.js";
import { state } from "../init/state.js";

const nextButtonHandler = () => {
  const quizContainer = document.querySelector(".quiz");
  quizContainer.innerHTML = "";
  data.indexOfRenderedQuestion++;
  // check if last question, if yes - render "submit"
  const indesPlusOne = state.indexOfRenderedQuestion + 1;
  if (indesPlusOne === state.numberOfTotalQuestions) {
    const nextBtn = document.getElementById("next-button");
    nextBtn.style.display = "none";
    const submitBtn = document.getElementById("submit-button");
    submitBtn.style.display = "inline";
  }
  // render the question panel
  quizContainer.appendChild(quizQuestionPanel(data.indexOfRenderedQuestion));
};

export { nextButtonHandler };
