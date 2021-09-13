"use strict";

const acc = document.getElementsByClassName("btn-letter");
const backButton = document.querySelectorAll(".btn-back");

//Refactor this using forEach sometime
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

backButton.forEach((item) => {
  item.addEventListener("click", (event) => {
    history.back();
    console.log("back");
  });
});
