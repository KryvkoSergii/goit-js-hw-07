function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("div#boxes");

function createBoxes(amount) {
  let dimesion = 30;
  document.querySelector("#controls input").value = "";
  destroyBoxes();
  let accumulator = "";
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${dimesion}px`;
    div.style.height = `${dimesion}px`;
    div.style.backgroundColor = getRandomHexColor();
    dimesion += 10;
    accumulator += div.outerHTML;
  }
  boxes.innerHTML = accumulator;
}

function destroyBoxes() {
  boxes.innerHTML="";
}

document.querySelector("#controls button[data-create]").addEventListener("click", event => {
  const number = document.querySelector("#controls input").value;
  if (number >= 1 && number <= 100) {
    createBoxes(number);
  }
});

document.querySelector("#controls button[data-destroy]").addEventListener("click", event => {
  document.querySelector("#controls input").value = "";
  destroyBoxes();
});