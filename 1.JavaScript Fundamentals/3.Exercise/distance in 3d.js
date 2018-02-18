function distanceI3d(a) {
   let x1=a[0];
    let y1=a[1];
    let z1=a[2];
    let x2=a[3];
    let y2=a[4];
    let z2=a[5];
    let d2=(x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)+(z2-z1)*(z2-z1);
    let d=Math.sqrt(d2);
    console.log(d);
}
distanceI3d([1, 1, 0, 5, 4, 0]);