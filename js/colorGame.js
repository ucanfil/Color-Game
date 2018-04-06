let colors = [];
let num = 6;
generateColorsArray(num);
const squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
const messageDisplay = document.getElementById("message");
const colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
const resetButton = document.querySelector(".nav-style button");
const header = document.querySelector(".header-style");
const easyButton = document.getElementById("easy");
const hardButton = document.getElementById("hard");
assignColors();

resetButton.addEventListener("click", function(){
  reset();
});

easyButton.addEventListener("click", function(){
  num = 3;
  reset();
  easyButton.classList.add("current");
  hardButton.classList.remove("current");
  for (let i = 3; i < 6; i++){
    squares[i].style.display = "none";
  }
});

hardButton.addEventListener("click", function () {
  num = 6;
  reset();
  easyButton.classList.remove("current");
  hardButton.classList.add("current");
  for (let i = 3; i < 6; i++) {
    squares[i].style.display = "block";
  }
});

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
    squares[i].style.backgroundColor = colors[i];
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