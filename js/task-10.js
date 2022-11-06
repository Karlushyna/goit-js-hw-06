const refs = { 
  inputNumber: document.querySelector('#controls>input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let standartBoxSize = 30;

function createBoxes(amount) {
  const addElements = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div')
    div.style.width = `${standartBoxSize + 10 * i}px`
    div.style.height = `${standartBoxSize + 10 * i}px`
    div.style.backgroundColor = getRandomHexColor()
    addElements.push(div);
  }
return addElements;
};

const destroyBoxes = () => {
	boxes.innerHTML = '';
}


refs.btnCreate.addEventListener('click', () => {
  let addBoxes = createBoxes(refs.inputNumber.value);
  refs.boxes.append(...addBoxes);
});


refs.btnDestroy.addEventListener('click', destroyBoxes);