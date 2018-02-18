function sumFirstAndLast(a) {
    a.map(Number);
    let sum=a[0]+a[a.length-1];
    console.log(sum);
}
sumFirstAndLast([10,20,30, 40]);