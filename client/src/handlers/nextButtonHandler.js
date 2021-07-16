import { data } from "../../data/quiz.js";
import { quizQuestionPanel } from "../components/pages/quiz/quiz-question-panel.js";
import { createHintPanel } from "../components/pages/quiz/hint-panel.js";
import { state } from "../init/state.js";

const nextButtonHandler = () => {
  const quizContainer = document.querySelector(".quiz");
  quizContainer.innerHTML = "";
  data.indexOfRenderedQuestion++;
  // render the question panel
  quizContainer.appendChild(quizQuestionPanel(data.indexOfRenderedQuestion));

  const hintContainer = document.querySelector(".btn-info");
  hintContainer.innerHTML = "";
  state.questions[state.indexOfRenderedQuestion].links++;
  hintContainer.appendChild(
    createHintPanel(state.questions[state.indexOfRenderedQuestion].links)
  );
};

export { nextButtonHandler };
