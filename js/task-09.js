const refs = {
  widget: document.querySelector('.widget'),
  bodyColor: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor(event) {
let color = getRandomHexColor();
refs.widget.style.backgroundColor = color;
refs.bodyColor.textContent = color;

}

refs.button.addEventListener ('click', changeColor);