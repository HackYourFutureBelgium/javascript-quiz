import { state } from "../../../init/state.js";

export const numberOfQu = () => {
  const divQu = document.createElement("div");
  divQu.classList = "numberofQuDiv";
  const titleQu = document.createElement("h2");
  titleQu.innerText = `
  You have ${state.numberOfTotalQuestions} questions to answer.`;
  divQu.appendChild(titleQu);
  return divQu;
};
