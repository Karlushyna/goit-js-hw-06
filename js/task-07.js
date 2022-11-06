const refs = {
input: document.querySelector('#font-size-control'),
text: document.querySelector('#text'),
}

const textChange = (event) => {
  refs.text.style.fontSize = `${event.target.value}px`;
}

refs.input.addEventListener('click', textChange);