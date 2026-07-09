let waktu = 10;
let tombolDitekan = false;
let tombol = 7;

while (!tombolDitekan && waktu > 0) {
    console.log(`Countdown: ${waktu}`);
    if (waktu === tombol) {
        console.log(`Timer dihentikan oleh user pada detik ke-${tombol}.`);
        tombolDitekan = true;
    } 
    waktu--;
}
if (!tombolDitekan) {
    console.log(`Countdown selesai!`);
}