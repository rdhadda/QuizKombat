const question = document.getElementById("question");
const answers = [...document.getElementsByClassName("choice-text")];
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "What is the largest planet in our solar system?",
    choice1: "Venus",
    choice2: "Mars",
    choice3: "Jupiter",
    choice4: "Saturn",
    answer: 3,
  },
  {
    question: "What is the capital of France?",
    choice1: "Berlin",
    choice2: "Madrid",
    choice3: "Paris",
    choice4: "Rome",
    answer: 3,
  },
  {
    question:
      "In CSS, what property is used to control the spacing between individual letters?",
    choice1: "line-height",
    choice2: "margin",
    choice3: "padding",
    choice4: "letter-spacing",
    answer: 4,
  },
];

// the startGame function sets the questionCounter and score to 0.
function startGame() {
  questionCounter = 0;
  score = 0;
  // availableQuestions variable uses the spread operator to create a new array of the questions array.
  availableQuestions = [...questions];
  newQuestion();
}

// newQuestion function will randomly select a question and answer choices from the variable currentQuestions.
function newQuestion() {
  if (availableQuestions.length === 0 || questionCounter > 10) {
    // How to redirect to another html page https://stackoverflow.com/questions/442384/jumping-to-a-new-html-page-with-javascript
    return location.assign("/end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  answers.forEach((answerElement, index) => {
    answerElement.innerText = currentQuestion[`choice${index + 1}`];
  });
  //removes the question which has just been displayed out of the array so it can't be used again.
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
}

// For loop with an event listener attached to determine which answer the user has selected.
for (let i = 0; i < answers.length; i++) {
  answers[i].addEventListener("click", () => {
    if (!acceptingAnswers) return;
    // acceptingAnswers it set to false, if the player tries to click on another answer the code will exit.
    acceptingAnswers = false;
    const selectedAnswer = answers[i];
    newQuestion();
  });
}

startGame();
