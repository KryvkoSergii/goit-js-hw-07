const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", event => {
    const newValue = event.target.value.trim();
    output.textContent = newValue ? newValue : 'Anonymous';
});