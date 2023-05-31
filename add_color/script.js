// Database
const dbColors = [];

// Push data
document.forms["addColors-form"].onsubmit = (e) => {
  let color = document.forms["addColors-form"]["color"].value;
  dbColors.push(color);
  e.preventDefault();
  document.forms["addColors-form"].reset();
  dataProcess();
};

// Data Process
function dataProcess() {
  clearData();
  //   iteration data
  for (let i = 0; i < dbColors.length; i++) {
    let color = dbColors[i];

    displayData(i, color);
  }
}

// Clear Data
function clearData() {
  const tbody = document.querySelector(".addColors-tbody");
  // condition
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}

function displayData(i, color) {
  // make table row
  let tr = document.createElement("tr");

  // Make color table data
  let tdColor = document.createElement("td");
  tdColor.textContent = color;
  tr.appendChild(tdColor);

  //   Make button try
  let tryBtn = document.createElement("button");
  tryBtn.innerText = "try color";
  let indexNow = i;
  tryBtn.onclick = () => {
    tryColor(indexNow);
  };

  //   Button cannot work if you put in other element like td
  tr.appendChild(tryBtn);

  const tbody = document.querySelector(".addColors-tbody");
  tbody.appendChild(tr);
}

// Function try color
function tryColor(index) {
  document.body.style.backgroundColor = dbColors[index];
}
