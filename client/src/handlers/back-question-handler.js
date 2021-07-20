import { quizQuestionPanel } from "../components/pages/quiz/quiz-question-panel.js";
import { state } from "../init/state.js";

const backQuestionHandler = () => {
  const quiz = document.querySelector(".quiz");
  quiz.innerHTML = "";
  state.indexOfRenderedQuestion -= 1;
  // check if it is not the last question and render "next" instead of "submit"
  const indesPlusOne = state.indexOfRenderedQuestion + 1;
  if (indesPlusOne !== state.numberOfTotalQuestions) {
    const submitBtn = document.getElementById("submit-button");
    submitBtn.style.display = "none";
    const nextBtn = document.getElementById("next-button");
    nextBtn.style.display = "inline";
  }
  quiz.appendChild(quizQuestionPanel(state.indexOfRenderedQuestion));
};
export { backQuestionHandler };
