export const divResults = (correct, numOfQu) => {
  const div = document.createElement("div");
  div.classList = "div-results";
  const resultTitle = document.createElement("h1");
  resultTitle.innerText = `You have ${correct} correct answers out of ${numOfQu}`;
  const pEval = document.createElement("p");
  pEval.innerText = "";

  if (correct <= 3) {
    pEval.innerText = "Very bad";
    pEval.style.color = "red";
  } else if (correct <= 6) {
    pEval.innerText = "Satisfactory";
    pEval.style.color = "orange";
  } else {
    pEval.innerText = "You are good at JS!";
    pEval.style.color = "green";
  }

  div.appendChild(resultTitle);
  div.appendChild(pEval);
  return div;
};
