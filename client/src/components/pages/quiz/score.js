/**
 * Returns a div element.
 *
 * @param {number} updatedScore - Updated score from data.
 * @returns {HTMLDivElement} - Div with rendered score.
 */

export const score = (updatedScore) => {
  const div = document.createElement("div");
  div.id = "div-score";
  const scoreTitle = document.createElement("h4");
  scoreTitle.innerText = `Your score is ${updatedScore}`;

  div.appendChild(scoreTitle);
  return div;
};
