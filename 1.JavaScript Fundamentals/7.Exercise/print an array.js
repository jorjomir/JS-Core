function printAnArray(arr) {
    let char=arr.pop();
    let print="";
    for (let i = 0; i < arr.length; i++) {
        if(i===arr.length-1) {
            print+=arr[i];
        }
        else {
            print += arr[i] + char;
        }
    }
    console.log(print);
}
printAnArray(["One", "Two", "Three", "Four", "Five","-"]);