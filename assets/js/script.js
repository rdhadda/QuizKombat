// script for how to play accordion
var accordion = document.querySelector(".accordion");
const submit = document.getElementById("submit");

accordion.addEventListener("click", function () {
  var panel = this.nextElementSibling;
  panel.classList.toggle("expanded");
});

submit.addEventListener("click", () => {
  var nameInput = document.getElementById("name").value;
  localStorage.setItem("name", nameInput);
  console.log(nameInput);
});
