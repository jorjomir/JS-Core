function jansNotation(arr) {
    let nums=[];
    let operands=[];
    for (let line of arr) {
        if(Number.isInteger(line)) {
            nums.push(Number(line));
        } else {
            operands.push(line);
        }
    }
    if(nums.length-operands.length>1) {
        console.log("Error: too many operands!");
        return;
    }  else if(nums.length===operands.length) {
        console.log("Error: not enough operands!");
        return;
    }
    for (let oper of operands) {
        if(oper==="+") {
            let two=nums.pop();
            let one=nums.pop();
            nums.push(one+two);
        } else if(oper==="-") {
            let two=nums.pop();
            let one=nums.pop();
            nums.push(one-two);
        } else if(oper==="*") {
            let two=nums.pop();
            let one=nums.pop();
            nums.push(one*two);
        } else if(oper==="/") {
            let two=nums.pop();
            let one=nums.pop();
            nums.push(one/two);
        }
    }
    console.log(Math.ceil(nums[i]));
}
jansNotation([5, 3,4,"*","-"]);