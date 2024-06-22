
const form = document.querySelector("form.login-form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const someObj = {
        email: form.elements.email.value.trim(),
        password: form.elements.password.value.trim()
    }

    if (someObj.email && someObj.password) {
        form.reset();
    } else {
        alert('All form fields must be filled in');
    }
});