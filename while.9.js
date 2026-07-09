let angka = 2;
let iterasi = 0;

while (angka < 1000) {
    angkaSebelum = angka;
    angka = angka * angka;
    iterasi++;
    console.log(`Iterasi ${iterasi}: ${angkaSebelum}^${angkaSebelum} = ${angka}`);
    
}

console.log(`Angka 2 harus dikuadratkan ${iterasi} kali untuk melebihi 1.000.`)
console.log(`Hasil akhir: ${angka}`)