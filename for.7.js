let kata = "junaidi";
let jumlahVokal = 0;

for (i = 0; i <= kata.length; i++) {
    if ("aiueo".includes(kata[i])) {
        jumlahVokal++;
    }
}
console.log(`Jumlah vokal: ${jumlahVokal}`);