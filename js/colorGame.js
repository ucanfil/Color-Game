const colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
];

const squares = document.querySelectorAll(".square");
const pickedColor = colors[3];
const messageDisplay = document.getElementById("message");
const colorDisplay = document.querySelector("#colorDisplay");

for(let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function () {
    const clickedColor = this.style.backgroundColor;
    if (pickedColor === clickedColor) {
      squares[i].style.backgroundColor = clickedColor;
      document.querySelector("header").style.backgroundColor = clickedColor;
      messageDisplay.innerHTML = "CORRECT!";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.innerHTML = "TRY AGAIN!";
    }
  });
}

