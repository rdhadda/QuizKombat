const finalScore = document.getElementById("final-score-number");
const finalScoreText = document.getElementById("final-score-text");
const score = parseInt(localStorage.getItem("score")) || 0;

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
