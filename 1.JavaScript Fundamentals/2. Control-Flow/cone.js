function cone(a,b) {
    let s = Math.sqrt(a * a + b * b);
    let volume=Math.PI * a * a * b / 3;

    let area= Math.PI * a * (a + s);
    console.log(`volume = ${volume}`);
    console.log(`area = ${area}`);
}