function evenPosition(a) {
    let b=[];
    for (let i = 0; i < a.length; i++) {
        if(i%2===0) {
            b.push(a[i]);
        }
    }
    console.log(b.join(' '));
}
evenPosition([10, 20, 30]);