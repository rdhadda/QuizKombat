// script for how to play accordion
var accordion = document.querySelector(".accordion");

accordion.addEventListener("click", function () {
  var panel = this.nextElementSibling;
  panel.classList.toggle("expanded");
});

// Event listener to determine whether the player has entered their name or not
const nameInput = document.getElementById("name");
const startGameButton = document.getElementById("startGameButton");

nameInput.addEventListener("input", () => {
  if (nameInput.value !== "") {
    startGameButton.classList.remove("disabled");
    var playerNameInput = document.getElementById("name").value;
    localStorage.setItem("name", playerNameInput);
    console.log(playerNameInput);
  } else {
    alert("Please Enter Your Name");
  }
});
