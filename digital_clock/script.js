// Buat sebuah function untuk membungkus setiap perintah
function timesNow() {
  // Buat variable untuk memanggil method date
  const time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  // panggil semua element yang dibutuhkan
  if (minute < 10) {
    document.getElementById("minute").textContent = `0${minute}`;
  } else {
    document.getElementById("minute").textContent = minute;
  }

  document.getElementById("hour").textContent = hour;
  document.getElementById("second").textContent = second;
}

setInterval(timesNow, 1000);
