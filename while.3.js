const prompt = require("prompt-sync")();

let pilihan = Number(prompt("=== MENU KALKULATOR ===\n1. Tambah\n2. Kurang\n3. Kali\n4. Keluar\nPilih menu (1-4): "));
while (pilihan !== 4) {
    console.log
    if (pilihan === 1) {
        pilihan = Number(prompt("=== MENU KALKULATOR ===\n1. Tambah\n2. Kurang\n3. Kali\n4. Keluar\nPilih menu (1-4): Anda memilih Tambah."))
    } else if (pilihan === 2) {
        pilihan = Number(prompt("=== MENU KALKULATOR ===\n1. Tambah\n2. Kurang\n3. Kali\n4. Keluar\nPilih menu (1-4): Anda memilih Kurang."))
    } else if (pilihan === 3) {
        pilihan = Number(prompt("=== MENU KALKULATOR ===\n1. Tambah\n2. Kurang\n3. Kali\n4. Keluar\nPilih menu (1-4): Anda memilih Kali."))
    }
}
console.log("=== MENU KALKULATOR ===\n1. Tambah\n2. Kurang\n3. Kali\n4. Keluar\nPilih menu (1-4): Terima kasih telah menggunakan program!")
 