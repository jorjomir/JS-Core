function cookingByNumbers(arr) {
    let num=Number(arr[0]);
    for (let i = 1; i <= arr.length-1; i++) {
        if(arr[i]==="chop") {
            num=num/2;
        }
        else if(arr[i]==="dice") {
            num=Math.sqrt(num);
        }
        else if(arr[i]==="spice") {
            num+=1;
        }
        else if(arr[i]==="bake") {
            num*=3;
        }
        else if(arr[i]==="fillet") {
            num=num*0.8;
        }
        console.log(num);
    }
}
cookingByNumbers([32, "chop", "chop", "chop", "chop", "chop"]);