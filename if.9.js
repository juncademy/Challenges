let kendaraan = "mobil";
let durasi = 3;
let tarif; 

if (kendaraan === "motor") {
    tarif = 2000;
} else if (kendaraan === "mobil") {
    tarif = 5000;
} else if (kendaraan === "truk") {
    tarif = 10000;
} else {
    console.log("Kendaraan tidak diizinkan");
}

let totalBayar = durasi * tarif;

console.log(`Jenis kendaraan: ${kendaraan}`);
console.log(`Durasi parkir: ${durasi}`);
console.log(`Tarif per jam: ${tarif}`);
console.log(`Total bayar: ${totalBayar}`);