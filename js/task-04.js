const buttonIncrement = document.querySelector("[data-action = 'increment']");
const buttonDecrement = document.querySelector("[data-action = 'decrement']");
const displayCounter = document.querySelector('#value');

let counterValue = 0;

const handleClick = () => displayCounter.textContent = counterValue;

buttonIncrement.addEventListener('click', () => {
  counterValue += 1;
  handleClick();
})

buttonDecrement.addEventListener('click', () => {
  counterValue -= 1;
  handleClick();
})