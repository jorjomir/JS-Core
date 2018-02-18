function printEveryNthElement(arr) {
    let step=Number(arr.pop());
    for (let i = 0; i < arr.length; i+=step) {
        console.log(arr[i]);
    }
}
printEveryNthElement([5,6,7,8,9,10,2]);