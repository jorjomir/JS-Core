function extract(arr) {
    arr.map(Number);
    for (let i = 1; i < arr.length; i++) {
        if(arr[i-1]>arr[i]) {
            arr.splice(i,1);
        }
    }
    console.log(arr.join('\n'));
}
