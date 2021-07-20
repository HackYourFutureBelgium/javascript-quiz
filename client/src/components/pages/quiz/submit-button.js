import { loadResults } from "../../../handlers/submit-button-handler.js";
import { updateScore } from "../../../handlers/update-score.js";

/**
 * Renders button element.
 *
 * @returns {HTMLButtonElement}
 */

// create delete button element + class + text node

export const submitButton = () => {
  const buttonEl = document.createElement("button");
  buttonEl.classList = "btn btn-primary";
  buttonEl.id = "submit-button";
  buttonEl.innerHTML = "Submit";
  buttonEl.addEventListener("click", updateScore);
  buttonEl.addEventListener("click", loadResults);
  document.body.appendChild(buttonEl);

  return buttonEl;
};
