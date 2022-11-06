const textInput = document.querySelector('#validation-input')

function onInputResult(event) {
	if (event.currentTarget.value.length == textInput.getAttribute('data-length')) {
		textInput.classList.add('valid');
		if (textInput.classList.contains('invalid')) {
			textInput.classList.remove('invalid')
		}
	} else {
		textInput.classList.add('invalid');
    if (textInput.classList.contains('valid')) {
			textInput.classList.remove('valid');
		}
	}
}

textInput.addEventListener('blur', onInputResult);