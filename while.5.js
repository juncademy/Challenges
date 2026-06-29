let angka = 100;
let langkah = 1;

while (angka > 1) {
    console.log(`Langkah ${langkah}: ${angka} / 2 = ${angka / 2}`);
   angka = angka / 2;
   langkah++;
}
console.log(`Proses selesai setelah ${langkah - 1} langkah.`)