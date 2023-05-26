let number = 0;
let displayNumber = document.getElementById("number");
displayNumber.innerText = number;

document.getElementById("decrease-btn").addEventListener("click", () => {
  number -= 1;
  displayNumber.innerText = number;
  if (number < 0) {
    displayNumber.style.color = "#f03e3e";
  } else {
    displayNumber.style.color = "#000";
  }
});

document.getElementById("reset-btn").addEventListener("click", () => {
  number = 0;
  displayNumber.innerText = number;
  if (number < 0) {
    displayNumber.style.color = "#f03e3e";
  } else {
    displayNumber.style.color = "#000";
  }
});

document.getElementById("increase-btn").addEventListener("click", () => {
  number += 1;
  displayNumber.innerText = number;
  if (number < 0) {
    displayNumber.style.color = "#f03e3e";
  } else {
    displayNumber.style.color = "#000";
  }
});
