const finalScore = document.getElementById("final-score-number");
const finalScoreText = document.getElementById("final-score-text");
//variable to access the stored score
const score = parseInt(localStorage.getItem("score")) || 0;

// If statement to give a phrase depending on players outcome
if (score <= 3) {
  finalScoreText.innerHTML = "Keep trying, you'll get better!";
  finalScore.innerText = `${score}`;
} else if (score <= 6) {
  finalScoreText.innerHTML = "Good effort! Keep practicing";
  finalScore.innerText = `${score}`;
} else if (score === 10) {
  finalScoreText.innerHTML = "Perfect score! Well done!";
  finalScore.innerText = `${score}`;
}
