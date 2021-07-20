<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TREE -->

> [interactive graph](./dependency-graph.html)

![dependency graph](./dependency-graph.svg)

<!-- END TREE -->

<!-- BEGIN TOC -->

- components
  - layout
    - [footer.js](#clientsrccomponentslayoutfooterjs)
    - [navbar.js](#clientsrccomponentslayoutnavbarjs)
    - [page.js](#clientsrccomponentslayoutpagejs)
  - pages
    - home
      - [index.js](#clientsrccomponentspageshomeindexjs)
      - [instructions.js](#clientsrccomponentspageshomeinstructionsjs)
      - [number-of-questions.js](#clientsrccomponentspageshomenumber-of-questionsjs)
      - [start-button.js](#clientsrccomponentspageshomestart-buttonjs)
    - questions
      - [index.js](#clientsrccomponentspagesquestionsindexjs)
    - quiz
      - [back-button.js](#clientsrccomponentspagesquizback-buttonjs)
      - [div-results.js](#clientsrccomponentspagesquizdiv-resultsjs)
      - [hint-div.js](#clientsrccomponentspagesquizhint-divjs)
      - [hint-panel.js](#clientsrccomponentspagesquizhint-paneljs)
      - [index.js](#clientsrccomponentspagesquizindexjs)
      - [nextButton.js](#clientsrccomponentspagesquiznextButtonjs)
      - [quiz-buttons.js](#clientsrccomponentspagesquizquiz-buttonsjs)
      - [quiz-question-panel.js](#clientsrccomponentspagesquizquiz-question-paneljs)
      - [restart-button.js](#clientsrccomponentspagesquizrestart-buttonjs)
      - [score.js](#clientsrccomponentspagesquizscorejs)
      - [submit-button.js](#clientsrccomponentspagesquizsubmit-buttonjs)
  - shared
    - [button.js](#clientsrccomponentssharedbuttonjs)
    - [div.js](#clientsrccomponentsshareddivjs)
- handlers
  - [back-question-handler.js](#clientsrchandlersback-question-handlerjs)
  - [nextButtonHandler.js](#clientsrchandlersnextButtonHandlerjs)
  - [submit-button-handler.js](#clientsrchandlerssubmit-button-handlerjs)
  - [update-score.js](#clientsrchandlersupdate-scorejs)
- init
  - [index.js](#clientsrcinitindexjs)
  - [router.js](#clientsrcinitrouterjs)
  - [state.js](#clientsrcinitstatejs)
- logic
  - [reset-quiz.js](#clientsrclogicreset-quizjs)
- [routes.js](#clientsrcroutesjs)

---

<!-- END TOC -->

<!-- BEGIN DOCS -->

# /components

## /layout

<details><summary><a href="../../client/src/components/layout/footer.js" id="clientsrccomponentslayoutfooterjs">../client/src/components/layout/footer.js</a></summary>

<a name="footer"></a>

## footer ⇒ <code>HTMLDivElement</code>

The shared footer.

**Returns**: <code>HTMLDivElement</code> - A rendered footer element.

</details>

<details><summary><a href="../../client/src/components/layout/navbar.js" id="clientsrccomponentslayoutnavbarjs">../client/src/components/layout/navbar.js</a></summary>

<a name="navbar"></a>

## navbar ⇒ <code>HTMLDivElement</code>

The shared navbar.

**Returns**: <code>HTMLDivElement</code> - A rendered nav bar element.

| Param  | Type                | Description                          |
| ------ | ------------------- | ------------------------------------ |
| routes | <code>object</code> | A routes object, see /src/routes.js. |

</details>

<details><summary><a href="../../client/src/components/layout/page.js" id="clientsrccomponentslayoutpagejs">../client/src/components/layout/page.js</a></summary>

<a name="page"></a>

## page ⇒ <code>HTMLDivElement</code>

The page layout component.

**Returns**: <code>HTMLDivElement</code> - A rendered page element.  
**Throws**:

- <code>TypeError</code> When the bodyComponent is not a function or DOM element.

| Param         | Type                                              | Description                               |
| ------------- | ------------------------------------------------- | ----------------------------------------- |
| bodyComponent | <code>function</code> \| <code>HTMLElement</code> | The body for the newly rendered page.     |
| routes        | <code>object</code>                               | The application's routes, for the navbar. |

</details>

---

## /pages

### /home

<details><summary><a href="../../client/src/components/pages/home/index.js" id="clientsrccomponentspageshomeindexjs">../client/src/components/pages/home/index.js</a></summary>

<a name="home"></a>

## home ⇒ <code>HTMLDivElement</code>

The home page.

**Returns**: <code>HTMLDivElement</code> - A rendered home page.

</details>

<details><summary><a href="../../client/src/components/pages/home/instructions.js" id="clientsrccomponentspageshomeinstructionsjs">../client/src/components/pages/home/instructions.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/pages/home/number-of-questions.js" id="clientsrccomponentspageshomenumber-of-questionsjs">../client/src/components/pages/home/number-of-questions.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/pages/home/start-button.js" id="clientsrccomponentspageshomestart-buttonjs">../client/src/components/pages/home/start-button.js</a></summary>

<a name="startQuizButton"></a>

## startQuizButton ⇒ <code>object</code>

This function creates a start/restart button for the quiz page and resets the quiz state: last seen question, score, answers.

**Returns**: <code>object</code> - - A div element containing the button.

| Param      | Type                | Description                                |
| ---------- | ------------------- | ------------------------------------------ |
| buttonText | <code>string</code> | The text that will be shown on the button. |

</details>

---

### /questions

<details><summary><a href="../../client/src/components/pages/questions/index.js" id="clientsrccomponentspagesquestionsindexjs">../client/src/components/pages/questions/index.js</a></summary>

<a name="questions"></a>

## questions ⇒ <code>HTMLDivElement</code>

The questions page.

**Returns**: <code>HTMLDivElement</code> - A rendered questions page.

</details>

---

### /quiz

<details><summary><a href="../../client/src/components/pages/quiz/back-button.js" id="clientsrccomponentspagesquizback-buttonjs">../client/src/components/pages/quiz/back-button.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/pages/quiz/div-results.js" id="clientsrccomponentspagesquizdiv-resultsjs">../client/src/components/pages/quiz/div-results.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/pages/quiz/hint-div.js" id="clientsrccomponentspagesquizhint-divjs">../client/src/components/pages/quiz/hint-div.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/pages/quiz/hint-panel.js" id="clientsrccomponentspagesquizhint-paneljs">../client/src/components/pages/quiz/hint-panel.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/pages/quiz/index.js" id="clientsrccomponentspagesquizindexjs">../client/src/components/pages/quiz/index.js</a></summary>

<a name="quiz"></a>

## quiz ⇒ <code>HTMLDivElement</code>

The quiz page. Loads when the quiz page is requested.

**Returns**: <code>HTMLDivElement</code> - A rendered quiz page.

</details>

<details><summary><a href="../../client/src/components/pages/quiz/nextButton.js" id="clientsrccomponentspagesquiznextButtonjs">../client/src/components/pages/quiz/nextButton.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/pages/quiz/quiz-buttons.js" id="clientsrccomponentspagesquizquiz-buttonsjs">../client/src/components/pages/quiz/quiz-buttons.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/pages/quiz/quiz-question-panel.js" id="clientsrccomponentspagesquizquiz-question-paneljs">../client/src/components/pages/quiz/quiz-question-panel.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/pages/quiz/restart-button.js" id="clientsrccomponentspagesquizrestart-buttonjs">../client/src/components/pages/quiz/restart-button.js</a></summary>

<a name="createRestartQuizButtonPanel"></a>

## createRestartQuizButtonPanel ⇒ <code>object</code>

This function creates a start/restart button for the quiz page and resets the quiz state: last seen question, score, answers.

**Returns**: <code>object</code> - - A div element containing the button.

</details>

<details><summary><a href="../../client/src/components/pages/quiz/score.js" id="clientsrccomponentspagesquizscorejs">../client/src/components/pages/quiz/score.js</a></summary>

<a name="score"></a>

## score ⇒ <code>HTMLDivElement</code>

Returns a div element.

**Returns**: <code>HTMLDivElement</code> - - Div with rendered score.

| Param        | Type                | Description              |
| ------------ | ------------------- | ------------------------ |
| updatedScore | <code>number</code> | Updated score from data. |

</details>

<details><summary><a href="../../client/src/components/pages/quiz/submit-button.js" id="clientsrccomponentspagesquizsubmit-buttonjs">../client/src/components/pages/quiz/submit-button.js</a></summary>

<a name="submitButton"></a>

## submitButton ⇒ <code>HTMLButtonElement</code>

Renders button element.

</details>

---

---

## /shared

<details><summary><a href="../../client/src/components/shared/button.js" id="clientsrccomponentssharedbuttonjs">../client/src/components/shared/button.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/shared/div.js" id="clientsrccomponentsshareddivjs">../client/src/components/shared/div.js</a></summary>

<a name="divElement"></a>

## divElement ⇒ <code>object</code>

This component creates a div element and returns it.

**Returns**: <code>object</code> - - A div element.

| Param      | Type                | Description                         |
| ---------- | ------------------- | ----------------------------------- |
| classNames | <code>string</code> | The class names of the div element. |
| id         | <code>string</code> | The unique id of the div element.   |

</details>

---

---

# /handlers

<details><summary><a href="../../client/src/handlers/back-question-handler.js" id="clientsrchandlersback-question-handlerjs">../client/src/handlers/back-question-handler.js</a></summary>

</details>

<details><summary><a href="../../client/src/handlers/nextButtonHandler.js" id="clientsrchandlersnextButtonHandlerjs">../client/src/handlers/nextButtonHandler.js</a></summary>

</details>

<details><summary><a href="../../client/src/handlers/submit-button-handler.js" id="clientsrchandlerssubmit-button-handlerjs">../client/src/handlers/submit-button-handler.js</a></summary>

</details>

<details><summary><a href="../../client/src/handlers/update-score.js" id="clientsrchandlersupdate-scorejs">../client/src/handlers/update-score.js</a></summary>

</details>

---

# /init

<details><summary><a href="../../client/src/init/index.js" id="clientsrcinitindexjs">../client/src/init/index.js</a></summary>

</details>

<details><summary><a href="../../client/src/init/router.js" id="clientsrcinitrouterjs">../client/src/init/router.js</a></summary>

</details>

<details><summary><a href="../../client/src/init/state.js" id="clientsrcinitstatejs">../client/src/init/state.js</a></summary>

</details>

---

# /logic

<details><summary><a href="../../client/src/logic/reset-quiz.js" id="clientsrclogicreset-quizjs">../client/src/logic/reset-quiz.js</a></summary>

## Constants

<dl>
<dt><a href="#resetQuiz">resetQuiz</a></dt>
<dd><p>This function reset the state of quiz:</p>
<ul>
<li>resets indexOfRenderedQuestion,</li>
<li>resets currentScore, and</li>
<li>resets the state of each question.</li>
</ul>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#resetQuestions">resetQuestions()</a></dt>
<dd><p>This function resets the state of each question in the quiz:</p>
<ul>
<li>resets answered property and</li>
<li>resets selected property of each available answer for each question.</li>
</ul>
</dd>
</dl>

<a name="resetQuiz"></a>

## resetQuiz

This function reset the state of quiz:

- resets indexOfRenderedQuestion,
- resets currentScore, and
- resets the state of each question.

<a name="resetQuestions"></a>

## resetQuestions()

This function resets the state of each question in the quiz:

- resets answered property and
- resets selected property of each available answer for each question.

</details>

---

<details><summary><a href="../../client/src/routes.js" id="clientsrcroutesjs">../client/src/routes.js</a></summary>

<a name="module_routes"></a>

## routes

Defines the route URLs, names and callbacks.

</details>

<!-- END DOCS -->
