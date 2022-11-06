const refs = {
  form: document.querySelector('.login-form'),
}

function handleSubmit (event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

const userData = { email: email.value, password: password.value}

  console.log(userData);
  event.currentTarget.reset();
}

refs.form.addEventListener("submit", handleSubmit);
