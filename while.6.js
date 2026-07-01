const prompt = require("prompt-sync")();

let password = "";
let percobaan = 1;
let maxPercobaan = 3;
let berhasil = false;

while (!berhasil && percobaan <= maxPercobaan) {
  password = prompt("Masukkan password: ");
  if (password === "admin123") {
    console.log("Login berhasil.");
    berhasil = true;
  } else if (password !== "admin123" && percobaan < maxPercobaan) {
    console.log(`Password salah. Sisa percobaan: ${maxPercobaan - percobaan}`);
  } else {
    console.log("Akses ditolak. Terlalu banyak percobaan gagal.");
  }
  percobaan++;
}