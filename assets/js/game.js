// declaring variables
const question = document.getElementById("question");
const answers = [...document.getElementsByClassName("choice-text")];
const questionCount = [...document.getElementsByClassName("box")];
let currentQuestion;
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions;
const playerDifficultySelection = [
  ...document.getElementsByClassName("gameDifficulty"),
];
const choiceContainer = [
  ...document.getElementsByClassName("choice-container"),
];

// function with an event listener to determine which difficulty the player has selected
function selectDifficulty() {
  disableButtons(choiceContainer);
  for (let i = 0; i < playerDifficultySelection.length; i++) {
    playerDifficultySelection[i].addEventListener(
      "click",
      handleDifficultySelection
    );
  }
}

// function to handle the players difficulty selection
function handleDifficultySelection() {
  if (this.id === "easy") {
    // Set the easy questions set
    availableQuestions = [...easyQuestions];
  } else if (this.id === "medium") {
    // Set the medium questions set
    availableQuestions = [...mediumQuestions];
  } else if (this.id === "hard") {
    // Set the hard questions set
    availableQuestions = [...hardQuestions];
  }
  // Disable all difficulty buttons once a selection has been made
  disableButtons(playerDifficultySelection);
  enableButtons(choiceContainer);
  // Call the startGame function to initialize the game
  startGame();
}

// the startGame function sets the questionCounter and score to 0.
function startGame() {
  // Removes the previous stored score from local storage and resets questionCounter and score
  localStorage.removeItem("score");
  questionCounter = 0;
  score = 0;
  newQuestion();
}

// newQuestion function will randomly select a question and answer choices from the variable currentQuestions.
function newQuestion() {
  if (availableQuestions.length === 0 || questionCounter === 10) {
    // How to redirect to another html page taken from https://stackoverflow.com/questions/442384/jumping-to-a-new-html-page-with-javascript
    return location.assign("https://rdhadda.github.io/QuizKombat/score.html");
  }
  progressCounter();
  fetchingQuestions();
  acceptingAnswers = true;
  playersSelection();
}

// forEach loop with an event listener attached to determine which answer the user has selected.
function playersSelection() {
  answers.forEach(function (answer, i) {
    answer.addEventListener("click", function () {
      if (!acceptingAnswers) return;
      // acceptingAnswers is set to false, if the player tries to click on another answer the code will exit.
      acceptingAnswers = false;
      correctOrIncorrect(i);
      removeClasses(i);
    });
  });
}

// function to increment the progress bar
function progressCounter() {
  questionCounter++;
  setTimeout(() => {
    questionCount[questionCounter - 1].classList.add("progress-counter");
  }, 500);
}

// fetching a question and choices function
function fetchingQuestions() {
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  // for loop to iterate through each choice and assign the currentQuestion choice index.
  answers.forEach((answerElement, index) => {
    answerElement.innerText = currentQuestion[`choice${index + 1}`];
  });
  //removes the question which has just been displayed out of the array so it can't be used again.
  availableQuestions.splice(questionIndex, 1);
}

//function to remove classes
function removeClasses(i) {
  setTimeout(() => {
    answers[i].parentElement.classList.remove("correct");
    answers[i].parentElement.classList.remove("incorrect");
    for (let j = 0; j < answers.length; j++) {
      if (answers[j].innerText === currentQuestion.answer) {
        answers[j].parentElement.classList.remove("correct");
        answers[j].nextElementSibling.classList.remove("correct-icon");
      }
    }
    newQuestion();
  }, 1500);
}

//function to determine if the player is correct or incorrect
function correctOrIncorrect(i) {
  const selectedAnswer = answers[i].innerText;
  // Logic to determine whether the player has selected the correct answer and apply appropriate classes.
  if (selectedAnswer === currentQuestion.answer) {
    answers[i].parentElement.classList.add("correct");
    answers[i].nextElementSibling.classList.add("correct-icon");
    score++;
    //Stores the score in local storage to allow score.html to access and show the final score.
    localStorage.setItem("score", score);
  } else {
    answers[i].parentElement.classList.add("incorrect");
    answers[i].nextElementSibling.classList.add("incorrect-icon");
    for (let j = 0; j < answers.length; j++) {
      if (answers[j].innerText === currentQuestion.answer) {
        answers[j].parentElement.classList.add("correct");
        answers[j].nextElementSibling.classList.add("correct-icon");
      }
    }
  }
}

// function to disable buttons
function disableButtons(buttons) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("disabled");
  }
}

// function to enable buttons
function enableButtons(button) {
  for (let i = 0; i < button.length; i++) {
    button[i].classList.remove("disabled");
  }
}

// calling the select difficulty function when game.html first loads
selectDifficulty();
