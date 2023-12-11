function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");


function createBoxes(amount) {
  const boxSize = 30;
  const fragment = document.createDocumentFragment();

  destroyBoxes();

for (let i = 0; i < amount; i++) {
      const size = boxSize + i * 10;
      const box = document.createElement("div");

      box.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background-color: ${getRandomHexColor()};
        margin-bottom: 10px;
      `;

      fragment.appendChild(box);
    }
boxes.appendChild(fragment);
}

function destroyBoxes() {
boxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = Number(inputNumber.value);

  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
    inputNumber.value = "";
  }

});
destroyBtn.addEventListener('click', destroyBoxes);