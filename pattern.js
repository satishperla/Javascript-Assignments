var i = 0, j = 0, k = '';
for (i = 0; i < 6; i++) {
    for (j = 0; j < i; j++) {
        k += "*";
    }
    console.log(k);
    k = '';
}