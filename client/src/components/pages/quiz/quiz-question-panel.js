import { state } from "../../../init/state.js";

// import { divElement } from "../../shared/div.js";
// import { createQuizButtonsDiv } from "./quiz-buttons.js";
// import { createRestartQuizButtonPanel } from "./restart-button.js";

const checked = (e) => {
  const { target } = e;
  if (target.nodeName === "INPUT") {
    const isChecked = target.checked;

    if (isChecked) {
      state.questions[state.indexOfRenderedQuestion].answers[
        e.target.dataset.index
      ].selected = true;
    } else {
      state.questions[state.indexOfRenderedQuestion].answers[
        e.target.dataset.index
      ].selected = false;
    }
    // console.log(isChecked);
    // console.log(target);
    // eslint-disable-next-line spellcheck/spell-checker
    // console.log(e.target.dataset.index);
  }
};

export const quizQuestionPanel = (indexQuestion) => {
  const quizContainer = document.createElement("div");
  quizContainer.className = "quiz";
  const questionEl = document.createElement("p");
  const currentQuestion = state.questions[indexQuestion].question;
  questionEl.innerText = currentQuestion;
  const answersEl = document.createElement("ul");
  answersEl.setAttribute("class", "ul-answers");

  for (let i = 0; i < state.questions[indexQuestion].answers.length; i++) {
    const answers = state.questions[indexQuestion].answers[i];
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.dataset.index = i;
    if (answers.selected) {
      checkbox.setAttribute("checked", "true");
    }
    const listEl = document.createElement("li");
    listEl.setAttribute("class", "li-answer");
    const listDiv = document.createElement("div");
    listEl.appendChild(listDiv);
    listDiv.innerText = answers.text;
    listEl.insertAdjacentElement("afterbegin", checkbox);
    answersEl.appendChild(listEl);

    checkbox.addEventListener("click", checked);
  }
  quizContainer.appendChild(questionEl);
  quizContainer.appendChild(answersEl);
  return quizContainer;
};
