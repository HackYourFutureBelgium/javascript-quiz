import { button } from "../../shared/button.js";
import { resetQuiz } from "../../../logic/reset-quiz.js";

/** This function creates a start/restart button for the quiz page and resets the quiz state: last seen question, score, answers.
 *
 * @returns {object} - A div element containing the button.
 */
export const createRestartQuizButtonPanel = () => {
  const restartButtonPanel = document.createElement("div");
  restartButtonPanel.className = "";
  // restartButtonPanel.className = "mt-5";
  restartButtonPanel.id = "restart-button-panel";

  /* eslint-disable-next-line spellcheck/spell-checker */
  /* With Nagivo the way links work is to put the button inside a 'a' element.
   * This way you can add a proper event listener to the button.
   *
   * Note from: Yoshi Malaise : If you really want to add this manually you can look into navbar.js,
   * router.js  and routes.js to manually navigate to page from your code
   * you should import ‘router’. from the src/init/router.js and then call
   * router.navigate(‘/quiz’); instead of the classic location.href=‘./quiz’;
   */
  /* eslint-disable-next-line spellcheck/spell-checker */
  const theLink = document.createElement("a");
  theLink.href = "/quiz";
  theLink.setAttribute("data-navigo", true);

  const restartButton = button(
    "button",
    "Restart The Quiz",
    "btn btn-danger my-5"
  );

  theLink.appendChild(restartButton);

  restartButton.addEventListener("click", () => {
    // eslint-disable-next-line no-alert
    const isConfirmed = window.confirm(
      "Are you sure that you want to restart the quiz?"
    );

    if (isConfirmed) {
      // reset the quiz parameters
      resetQuiz();
    }
  });

  restartButtonPanel.appendChild(theLink);

  // return buttonsDiv;
  return restartButtonPanel;
};
