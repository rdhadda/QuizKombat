// script for how to play accordion
var accordion = document.querySelector(".accordion");

accordion.addEventListener("click", function () {
  var panel = this.nextElementSibling;
  panel.classList.toggle("expanded");
});

// Event listener to determine whether the player has entered their name or not
const nameInput = document.getElementById("name");
const startGameButtons = document.getElementsByClassName("startGame");

nameInput.addEventListener("input", () => {
  if (nameInput.value !== "") {
    for (let button of startGameButtons) {
      button.classList.remove("disabled");
    }
    var playerNameInput = document.getElementById("name").value;
    localStorage.setItem("name", playerNameInput);
    console.log(playerNameInput);
  } else {
    alert("Please Enter Your Name");
  }
});
