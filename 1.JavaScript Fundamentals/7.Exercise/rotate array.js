function rotateArray(arr) {
    let n=Number(arr.pop());
    for (let i = 0; i < n; i++) {
        let tail=arr.pop();
        arr.unshift(tail);
    }
    console.log(arr.join(' '));
}
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);