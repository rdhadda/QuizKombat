// script for how to play accordion
var accordion = document.querySelector(".accordion");

accordion.addEventListener("click", function () {
  var panel = this.nextElementSibling;

  panel.classList.toggle("expanded");
});
