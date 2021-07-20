import { state } from "../../../init/state.js";
import { instructions } from "./instructions.js";
import { numberOfQu } from "./number-of-questions.js";
import { startQuizButton } from "./start-button.js";

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const home = () => {
  const container = document.createElement("div");
  container.className = "body";

  container.appendChild(instructions());

  container.appendChild(numberOfQu());

  container.appendChild(startQuizButton());

  return container;
};

// calculate the number of total questions in the quiz data
state.numberOfTotalQuestions = state.questions.length;
