// Make todo database
const dbTodo = [];
const dbDueTime = [];

// Get value and push to database
document.forms["todo-form"].onsubmit = (e) => {
  let todo = document.forms["todo-form"]["todo"].value;
  let dueTime = document.forms["todo-form"]["dueTime"].value;

  dbTodo.push(todo);
  dbDueTime.push(dueTime);

  e.preventDefault();
  document.forms["todo-form"].reset();
  dataProcess();
};

// Make dataprocess function
function dataProcess() {
  clearData();
  for (let i = 0; i < dbTodo.length; i++) {
    let todo = dbTodo[i];
    let dueTime = dbDueTime[i];

    displayData(i, todo, dueTime);
  }
}

// Clear data first
function clearData() {
  let tbody = document.querySelector(".todo-tbody");
  // Make condition
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}

// Function to display data
function displayData(i, todo, dueTime) {
  let tr = document.createElement("tr");

  // todo table data
  let tdTodo = document.createElement("td");
  tdTodo.textContent = todo;
  tr.appendChild(tdTodo);

  // todo table data
  let tdDueTime = document.createElement("td");
  tdDueTime.textContent = dueTime;
  tr.appendChild(tdDueTime);

  let tbody = document.querySelector(".todo-tbody");
  tbody.appendChild(tr);
}
