const prompt = require ("prompt-sync")();

let angkaRahasia = 7;
let tebakan = Number(prompt("Masukkan angka yang benar: "));
let percobaan = 1;

while(tebakan !== angkaRahasia) {
if(tebakan < angkaRahasia) {
    tebakan = Number(prompt("Terlalu kecil! Coba lagi: "));
} else if(tebakan > angkaRahasia) {
    tebakan = Number(prompt("Terlalu besar! Coba lagi: "));
}
percobaan++
}

console.log(`Selamat! Anda berhasil menebak dalam ${percobaan} percobaan.`)
