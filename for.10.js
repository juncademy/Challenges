let a = 0, b = 1;

for (i = 1; i <= 8; i++) {
    console.log(a);
    let berikutnya = a + b;
    a = b;
    b = berikutnya;
}
