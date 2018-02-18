function concatenateReversed(arr) {
    let str="";
    for (let i = arr.length-1; i >= 0; i--) {
        str+=arr[i].split("").reverse().join("");
    }
    console.log(str);
}
concatenateReversed(['I', 'am', 'student']);