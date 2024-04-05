const finalScore = document.getElementById("final-score-number");
const finalScoreText = document.getElementById("final-score-text");
//variable to access the stored score and player's name
const score = parseInt(localStorage.getItem("score")) || 0;
let playerName = localStorage.getItem("name");

// If statement to give a phrase depending on player's outcome
if (score <= 3) {
  finalScoreText.innerHTML = `Keep trying ${playerName}, you'll get better!`;
  finalScore.innerText = `${score}`;
} else if (score <= 6) {
  finalScoreText.innerHTML = `Good effort ${playerName}! Keep practicing`;
  finalScore.innerText = `${score}`;
} else if (score === 10) {
  finalScoreText.innerHTML = `Perfect score ${playerName}! Well done!`;
  finalScore.innerText = `${score}`;
}
