let kata = "programming";
let i = 0;
let ditemukan = false;
let huruf = "m";

while (!ditemukan && i < kata.length) {
    if (kata[i] === huruf) {
        console.log(`Huruf '${huruf}' ditemukan di posisi: ${i}`);
        ditemukan = true;
        break;
    }
    i++;
}
if (!ditemukan) {
    console.log(`Huruf '${huruf}' tidak ditemukan.`)
}
