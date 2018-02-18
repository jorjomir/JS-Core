function addAndRemoveElements(arr) {
    let res=[];
    let num=0;
    for (let i = 0; i < arr.length; i++) {
        num++;
        if(arr[i]==="add") {
            res.push(num);
        }
        else {
            //arr.slice(res.length-1,1);
            res.pop();
        }
    }
    if(res.length===0) {
        console.log("Empty");
    }
    console.log(res.join("\n"))
}
addAndRemoveElements(["add", "add", "remove", "add", "add"]);