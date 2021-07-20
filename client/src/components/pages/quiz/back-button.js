import { backQuestionHandler } from "../../../handlers/back-question-handler.js";
import { updateScore } from "../../../handlers/update-score.js";

const backButton = () => {
  const button = document.createElement("button");
  button.className = "btn btn-primary mr-4";
  button.innerText = "back";
  button.addEventListener("click", () => {
    updateScore();
    backQuestionHandler();
  });

  return button;
};

export { backButton };
