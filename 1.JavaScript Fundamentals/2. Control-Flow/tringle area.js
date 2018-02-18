function triangleArea(a,b,c) {
    let semi=(a+b+c)/2;
    let sum=Math.sqrt(semi*(semi-a)*(semi-b)*(semi-c));
    console.log(sum);
}
