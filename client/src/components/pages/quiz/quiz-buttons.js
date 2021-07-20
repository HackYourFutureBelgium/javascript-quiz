import { button } from "../../shared/button.js";
import { divElement } from "../../shared/div.js";

export const createQuizButtonsDiv = () => {
  const quizButtonsDiv = divElement(
    // To remove the borders remove classes 'border',  'border-secondary',
    // and 'rounded'
    "my-3 border border-secondary rounded",
    "quiz-buttons"
  );

  /*
   * add previous button
   * by default visibility: hidden; from the css
   * to take the space in the div
   * after the first question this button must be visible
   */
  const previousButton = button(
    "button",
    "Previous",
    "btn btn-primary",
    "previous-button"
  );
  quizButtonsDiv.appendChild(previousButton);

  // add next button
  const nextButton = button("button", "Next", "btn btn-primary", "next-button");
  quizButtonsDiv.appendChild(nextButton);

  /*
   * add submit button
   * by default display:none; from the css
   * in the last question this button must be visible (display:block;)
   */
  const submitButton = button(
    "button",
    "Submit",
    "btn btn-primary",
    "submit-button"
  );
  quizButtonsDiv.appendChild(submitButton);

  return quizButtonsDiv;
};
