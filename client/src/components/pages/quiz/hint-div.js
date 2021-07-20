import { button } from "../../shared/button.js";
import { divElement } from "../../shared/div.js";

export const createHint = (hint, index) => {
  const hintDiv = divElement("btn-group mt-5 mb-2", "hint-panel");

  const dropdownButton = button(
    "button",
    `Hint${index + 1} `,
    "btn btn-info dropdown-toggle dropdown-split mr-2"
  );

  dropdownButton.dataset.toggle = "dropdown";

  const dropdownMenu = divElement("dropdown-menu");

  const aElement = document.createElement("a");
  aElement.className = "dropdown-item";
  aElement.innerText = hint.text;
  aElement.href = hint.url;
  aElement.target = "_blank";

  dropdownMenu.appendChild(aElement);

  hintDiv.appendChild(dropdownButton);
  hintDiv.appendChild(dropdownMenu);

  return hintDiv;
};
