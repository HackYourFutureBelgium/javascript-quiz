import { quizQuestionPanel } from "../components/pages/quiz/quiz-question-panel.js";
import { state } from "../init/state.js";

const backQuestionHandler = () => {
  const quiz = document.querySelector(".quiz");
  quiz.innerHTML = "";
  state.indexOfRenderedQuestion -= 1;
  quiz.appendChild(quizQuestionPanel(state.indexOfRenderedQuestion));
};
export { backQuestionHandler };
