const prompt = require("prompt-sync")();

let angkaRahasia = 7;
let tebakan = Number(prompt("Masukkan angka 1-10: "));
let percobaan = 0;

while (tebakan !== angkaRahasia) {
    if (tebakan < angkaRahasia) {
        (prompt("Terlalu kecil! Coba lagi."));
    } else if (tebakan > angkaRahasia) {
        (prompt("Terlalu besar! Coba lagi."));
    }

    tebakan = Number(prompt("Masukkan angka 1-10: "));
    percobaan++;
}

console.log(`Selamat! Anda berhasil menebak dalam ${percobaan} percobaan.`);