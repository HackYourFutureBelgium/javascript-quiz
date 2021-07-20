import { divElement } from "../../shared/div.js";
import { state } from "../../../init/state.js";
import { createHint } from "./hint-div.js";

export const createHintPanel = () => {
  // get the hints
  const hints = state.questions[state.indexOfRenderedQuestion].links;

  // create the Hint Panel
  const hintPanel = divElement("", "hint-panel");

  for (let index = 0; index < hints.length; index++) {
    const hint = hints[index];

    hintPanel.appendChild(createHint(hint, index));
  }

  return hintPanel;
};
