function expressionSplit(str) {
    let res=str.split(/[\s.();,]+/g);
    console.log(res.join("\n"));
}
expressionSplit('let sum = 4 * 4,b = "wow";');