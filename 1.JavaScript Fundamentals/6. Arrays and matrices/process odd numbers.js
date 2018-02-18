function processOddNumbers(arr) {
    arr.map(Number);
    let res=[];
    for (let i = 0; i < arr.length; i++) {
        if(i%2===1) {
            res.unshift(arr[i]*2);
        }
    }
    console.log(res.join(' '));
}