let kata = "programming";
let i = 0;
let ditemukan = false;
let huruf = "a";

while (i < kata.length && !ditemukan) {
    if (kata[i] === huruf) {
        console.log(`Huruf '${huruf}' ditemukan di posisi: ${i}`)
        ditemukan = true;
    } 
    else {
        console.log(`Huruf ${huruf} tidak ditemukan.`)
        //break;
    }
    i++
}