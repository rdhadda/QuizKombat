// declaring variables
const question = document.getElementById("question");
const answers = [...document.getElementsByClassName("choice-text")];
const questionCount = [...document.getElementsByClassName("box")];
let currentQuestion;
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions;

let questions = [
  {
    question: "What is the largest planet in our solar system?",
    choice1: "Venus",
    choice2: "Mars",
    choice3: "Jupiter",
    choice4: "Saturn",
    answer: "Jupiter",
  },
  {
    question: "What is the capital of France?",
    choice1: "Berlin",
    choice2: "Madrid",
    choice3: "Paris",
    choice4: "Rome",
    answer: "Paris",
  },
  {
    question:
      "In CSS, what property is used to control the spacing between individual letters?",
    choice1: "line-height",
    choice2: "margin",
    choice3: "padding",
    choice4: "letter-spacing",
    answer: "letter-spacing",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choice1: "Venus",
    choice2: "Mars",
    choice3: "Jupiter",
    choice4: "Saturn",
    answer: "Mars",
  },

  {
    question: "What is the capital city of Australia?",
    choice1: "Sydney",
    choice2: "Melbourne",
    choice3: "Canberra",
    choice4: "Perth",
    answer: "Canberra",
  },

  {
    question: "Who wrote 'Romeo and Juliet'?",
    choice1: "Charles Dickens",
    choice2: "Jane Austen",
    choice3: "William Shakespeare",
    choice4: "Mark Twain",
    answer: "William Shakespeare",
  },

  {
    question: "In which year did the Titanic sink?",
    choice1: "1910",
    choice2: "1912",
    choice3: "1915",
    choice4: "1918",
    answer: "1912",
  },

  {
    question: "What is the largest mammal in the world?",
    choice1: "Elephant",
    choice2: "Blue Whale",
    choice3: "Giraffe",
    choice4: "Hippopotamus",
    answer: "Blue Whale",
  },

  {
    question: "Which country is known as the Land of the Rising Sun?",
    choice1: "China",
    choice2: "Japan",
    choice3: "South Korea",
    choice4: "Vietnam",
    answer: "Japan",
  },

  {
    question: "What is the currency of Brazil?",
    choice1: "Peso",
    choice2: "Real",
    choice3: "Dollar",
    choice4: "Euro",
    answer: "Real",
  },

  {
    question: "Who painted the Mona Lisa?",
    choice1: "Vincent van Gogh",
    choice2: "Leonardo da Vinci",
    choice3: "Pablo Picasso",
    choice4: "Michelangelo",
    answer: "Leonardo da Vinci",
  },

  {
    question: "What is the capital city of Canada?",
    choice1: "Toronto",
    choice2: "Vancouver",
    choice3: "Ottawa",
    choice4: "Montreal",
    answer: "Ottawa",
  },

  {
    question: "Which element has the chemical symbol 'O'?",
    choice1: "Oxygen",
    choice2: "Gold",
    choice3: "Silver",
    choice4: "Iron",
    answer: "Oxygen",
  },

  {
    question: "What is the largest ocean on Earth?",
    choice1: "Atlantic Ocean",
    choice2: "Indian Ocean",
    choice3: "Southern Ocean",
    choice4: "Pacific Ocean",
    answer: "Pacific Ocean",
  },

  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    choice1: "Harper Lee",
    choice2: "J.K. Rowling",
    choice3: "Ernest Hemingway",
    choice4: "George Orwell",
    answer: "Harper Lee",
  },

  {
    question: "What is the capital city of South Africa?",
    choice1: "Cape Town",
    choice2: "Johannesburg",
    choice3: "Pretoria",
    choice4: "Durban",
    answer: "Pretoria",
  },

  {
    question: "Which gas do plants absorb during photosynthesis?",
    choice1: "Carbon Dioxide",
    choice2: "Oxygen",
    choice3: "Nitrogen",
    choice4: "Methane",
    answer: "Carbon Dioxide",
  },

  {
    question: "In which year did World War II end?",
    choice1: "1943",
    choice2: "1945",
    choice3: "1947",
    choice4: "1950",
    answer: "1945",
  },

  {
    question: "Who is known as the 'Father of Computer Science'?",
    choice1: "Alan Turing",
    choice2: "Bill Gates",
    choice3: "Steve Jobs",
    choice4: "Mark Zuckerberg",
    answer: "Alan Turing",
  },

  {
    question: "What is the largest desert in the world?",
    choice1: "Sahara Desert",
    choice2: "Gobi Desert",
    choice3: "Arabian Desert",
    choice4: "Antarctica",
    answer: "Antarctica",
  },

  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    choice1: "China",
    choice2: "Japan",
    choice3: "South Korea",
    choice4: "Vietnam",
    answer: "Japan",
  },

  {
    question: "Who wrote '1984'?",
    choice1: "George Orwell",
    choice2: "Aldous Huxley",
    choice3: "Ray Bradbury",
    choice4: "J.K. Rowling",
    answer: "George Orwell",
  },

  {
    question: "What is the currency of Japan?",
    choice1: "Yuan",
    choice2: "Won",
    choice3: "Yen",
    choice4: "Ringgit",
    answer: "Yen",
  },

  {
    question: "Which planet is known as the 'Blue Planet'?",
    choice1: "Mars",
    choice2: "Earth",
    choice3: "Jupiter",
    choice4: "Saturn",
    answer: "Earth",
  },

  {
    question: "What is the capital city of France?",
    choice1: "Madrid",
    choice2: "Berlin",
    choice3: "Paris",
    choice4: "Rome",
    answer: "Paris",
  },

  {
    question: "Who discovered penicillin?",
    choice1: "Alexander Fleming",
    choice2: "Marie Curie",
    choice3: "Louis Pasteur",
    choice4: "Robert Koch",
    answer: "Alexander Fleming",
  },

  {
    question: "In which year did the Berlin Wall fall?",
    choice1: "1985",
    choice2: "1989",
    choice3: "1991",
    choice4: "1995",
    answer: "1989",
  },

  {
    question: "What is the largest bird in the world?",
    choice1: "Eagle",
    choice2: "Ostrich",
    choice3: "Penguin",
    choice4: "Albatross",
    answer: "Ostrich",
  },

  {
    question: "Who is the author of the Harry Potter series?",
    choice1: "J.R.R. Tolkien",
    choice2: "George R.R. Martin",
    choice3: "J.K. Rowling",
    choice4: "C.S. Lewis",
    answer: "J.K. Rowling",
  },
];

// the startGame function sets the questionCounter and score to 0.
function startGame() {
  // Removes the previous stored score from local storage and resets questionCounter and score
  localStorage.removeItem("score");
  questionCounter = 0;
  score = 0;
  // availableQuestions variable uses the spread operator to create a new array of the questions array at the start of every game.
  availableQuestions = [...questions];
  newQuestion();
}

// newQuestion function will randomly select a question and answer choices from the variable currentQuestions.
function newQuestion() {
  if (availableQuestions.length === 0 || questionCounter === 10) {
    // How to redirect to another html page https://stackoverflow.com/questions/442384/jumping-to-a-new-html-page-with-javascript
    return location.assign("https://rdhadda.github.io/QuizKombat/score.html");
  }
  progressCounter();
  fetchingQuestions();
  acceptingAnswers = true;
  playersSelection();
}

// For loop with an event listener attached to determine which answer the user has selected.
function playersSelection() {
  for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", () => {
      if (!acceptingAnswers) return;
      // acceptingAnswers is set to false, if the player tries to click on another answer the code will exit.
      acceptingAnswers = false;
      correctOrIncorrect(i);
      removeClasses(i);
    });
  }
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
      }
    }
  }
}

startGame();
