const prompt = require("prompt-sync")();

let password = "";
let percobaan = 0;
let maxPercobaan = 3;
// let berhasil = false;
while(password !== "admin123" && percobaan <= maxPercobaan) {
    password = prompt("Masukkan password: ");
    percobaan++;
if (password === "admin123") {
  console.log("Login berhasil!");
} else if (password !== "admin123"){
  console.log(`Password salah. Sisa percobaan: ${maxPercobaan - percobaan}`);
}
}
if (percobaan >= maxPercobaan) {
    console.log(`Akses ditolak. Terlalu banyak percobaan gagal.`)
}