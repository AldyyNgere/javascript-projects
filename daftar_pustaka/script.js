// Make daftar pustaka database
const dbNamaPenulis = [];
const dbTahunTerbit = [];
const dbJudulBacaan = [];
const dbKotaTerbit = [];
const dbNamaPenerbit = [];

// Get data and push
document.forms["daftarPustaka-form"].onsubmit = (e) => {
  let namaPenulis = document.forms["daftarPustaka-form"]["nama-penulis"].value;
  dbNamaPenulis.push(namaPenulis);
  let tahunTerbit = document.forms["daftarPustaka-form"]["tahun-terbit"].value;
  dbTahunTerbit.push(tahunTerbit);
  let judulBacaan = document.forms["daftarPustaka-form"]["judul-bacaan"].value;
  dbJudulBacaan.push(judulBacaan);
  let kotaTerbit = document.forms["daftarPustaka-form"]["kota-terbit"].value;
  dbKotaTerbit.push(kotaTerbit);
  let namaPenerbit =
    document.forms["daftarPustaka-form"]["nama-penerbit"].value;
  dbNamaPenerbit.push(namaPenerbit);

  e.preventDefault();
  document.forms["daftarPustaka-form"].reset();
  dataProcess();
};

// Process daftar pustaka data
function dataProcess() {
  clearData();
  for (let i = 0; i < dbNamaPenerbit; i++) {
    const namaPenulis = dbNamaPenulis[i].split(" ");
    let firstName = namaPenulis[0];
    let lastName = namaPenulis[1];

    let tahunTerbit = dbTahunTerbit[i];
    let judulBacaan = dbJudulBacaan[i];
    let kotaTerbit = dbKotaTerbit[i];
    let namaPenerbit = dbNamaPenerbit[i];

    displayData(
      i,
      firstName,
      lastName,
      tahunTerbit,
      judulBacaan,
      kotaTerbit,
      namaPenerbit
    );
  }
}

// Clear data first
function clearData() {
  let tbody = document.querySelector(".daftarPustaka-tbody");
  // make condition
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}

// Function display data
function displayData(
  i,
  firstName,
  lastName,
  tahunTerbit,
  judulBacaan,
  kotaTerbit,
  namaPenerbit
) {
  // Make tr
  let tr = document.createElement("tr");

  // Make td for all data
  let td = document.createElement("td");
  td.textContent = `${lastName}, ${firstName}. ${tahunTerbit}. "${judulBacaan}". ${kotaTerbit}. ${namaPenerbit}`;
  tr.appendChild(td);
  document.querySelector(".daftarPustaka-tbody").appendChild(tr);
}
