import { backQuestionHandler } from "../../../handlers/back-question-handler.js";

const backButton = () => {
  const button = document.createElement("button");
  button.className = "btn btn-primary mr-4";
  button.innerText = "back";
  button.addEventListener("click", backQuestionHandler);
  return button;
};

export { backButton };
