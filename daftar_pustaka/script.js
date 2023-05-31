// Database
const dbNamaPenulis = [];
const dbTahunTerbit = [];
const dbJudulBacaan = [];
const dbKotaTerbit = [];
const dbNamaPenerbit = [];

// Push data
document.forms["daftarPustaka-form"].onsubmit = (e) => {
  let namaPenulis = document.forms["daftarPustaka-form"]["nama-penulis"].value;
  let tahunTerbit = document.forms["daftarPustaka-form"]["tahun-terbit"].value;
  let judulBacaan = document.forms["daftarPustaka-form"]["judul-bacaan"].value;
  let kotaTerbit = document.forms["daftarPustaka-form"]["kota-terbit"].value;
  let namaPenerbit =
    document.forms["daftarPustaka-form"]["nama-penerbit"].value;

  dbNamaPenulis.push(namaPenulis);
  dbTahunTerbit.push(tahunTerbit);
  dbJudulBacaan.push(judulBacaan);
  dbKotaTerbit.push(kotaTerbit);
  dbNamaPenerbit.push(namaPenerbit);

  e.preventDefault();
  document.forms["daftarPustaka-form"].reset();
  dataProcess();
};

// Function data process
function dataProcess() {
  clearData();
  // data iteration
  for (let i = 0; i < dbNamaPenulis.length; i++) {
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

// Function clear data
function clearData() {
  const tbody = document.getElementById("daftarPustaka-tbody");
  // make a condition
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
  // make table row
  let tr = document.createElement("tr");

  // make table data
  let td = document.createElement("td");
  td.innerText = `${lastName}, ${firstName}. ${tahunTerbit} "${judulBacaan}". ${kotaTerbit}, ${namaPenerbit}`;
  tr.appendChild(td);

  let tbody = document.getElementById("daftarPustaka-tbody");
  tbody.appendChild(tr);
}
