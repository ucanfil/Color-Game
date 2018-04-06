let colors = [];
let num = 6;
let pickedColor = pickColor();
const squares = document.querySelectorAll(".square");
const messageDisplay = document.getElementById("message");
const colorDisplay = document.querySelector("#colorDisplay");
const resetButton = document.querySelector(".nav-style button");
const header = document.querySelector(".header-style");
const easyButton = document.getElementById("easy");
const hardButton = document.getElementById("hard");
const modeButtons = document.getElementsByClassName("mode");

init();

function init(){
  reset();
  setupModeButtons();
  resetButton.addEventListener("click", function () {
    reset();
  });
};

function setupModeButtons(){
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      this.textContent === "Easy" ? num = 3 : num = 6;
      modeButtons[0].classList.remove("current");
      modeButtons[1].classList.remove("current");
      this.classList.add("current");
      reset();
    });
  }
}

function reset(){
  resetButton.textContent = "NEW COLORS";
  colors = [];
  generateColorsArray(num);
  assignColors();
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.innerHTML = "";
  header.style.backgroundColor = "steelblue";
}

function generateColorsArray(num){
  for (let i = 0; i < num; i++) {
    colors.push(generateColor());
  }
}

function changeColors(){
  for (let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = pickedColor;
    header.style.backgroundColor = pickedColor;
  }
}

function pickColor(){
  return colors[Math.floor(Math.random() * (colors.length - 1) + 1)];
}

function generateColor(){
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r}, ${g}, ${b})`;
}

function assignColors() {
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    };
    squares[i].addEventListener("click", function () {
      const clickedColor = this.style.backgroundColor;
      if (pickedColor === clickedColor) {
        changeColors();
        messageDisplay.textContent = "CORRECT!";
        resetButton.textContent = "PLAY AGAIN?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.innerHTML = "TRY AGAIN!";
      }
    });
  }
}