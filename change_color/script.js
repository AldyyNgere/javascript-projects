// Buat array colors
const colors = [
  "red",
  "yellow",
  "green",
  "blue",
  "black",
  "orange",
  "purple",
  "grey",
  "pink",
  "orangered",
  "lightblue",
  "violet",
];

// panggil setiap element yang dibutuhkan dari index.html
let color = document.getElementById("color");

// Buat suatu function sebagai pengkondisian ketika btn color di click
document.getElementById("btn-color").addEventListener("click", function () {
  // panggil function getRandomColors dan masukan ke dalam variable baru
  let randomColors = getRandomColors();
  document.body.style.backgroundColor = colors[randomColors];
  color.textContent = colors[randomColors];
});

// Buat function get random data
function getRandomColors() {
  return Math.floor(Math.random() * colors.length);
}
