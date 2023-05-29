// Buat array untuk menampung data todo
const dbTodo = [];
const dbdueTime = [];

// function ambil dan push data jangan lupa gunakan prevetDefault()
document.forms["todo-form"].onsubmit = (event) => {
  // ambil lalu push data input ke array
  let todo = document.forms["todo-form"]["todo"].value;
  dbTodo.push(todo);
  let dueTime = document.forms["todo-form"]["dueTime"].value;
  dbdueTime.push(dueTime);

  event.preventDefault();
  document.forms["todo-form"].reset();
  // Lanjutkan proses ke function berikutnya
  dataProcess();
};

// Function data process
function dataProcess() {
  clearData();
  for (let i = 0; i < dbTodo.length; i++) {
    let todo = dbTodo[i];
    let dueTime = dbdueTime[i];

    // Lanutkan ke function displayData dengan menambahkan i, todo, dan dueTime
    displayData(i, todo, dueTime);
  }
}

// Function clear data
function clearData() {
  const tbody = document.getElementById("todo-tbody");
  // Buat pengkondisian
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}

// Function display data
function displayData(index, todo, dueTime) {
  // Table row element
  let tr = document.createElement("tr");

  // Table data todo
  const tdTodo = document.createElement("td");
  tdTodo.textContent = todo;
  tr.appendChild(tdTodo);

  // Table data dueTime
  const tdDueTime = document.createElement("td");
  tdDueTime.textContent = dueTime;
  tr.appendChild(tdDueTime);

  const tbody = document.getElementById("todo-tbody");
  tbody.appendChild(tr);
}
