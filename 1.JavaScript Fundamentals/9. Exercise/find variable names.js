function findVariableNames(str) {
    let pattern=/\b_([a-zA-Z0-9]+)\b/g;
    let names=[];
    let match;
    while(match=pattern.exec(str)) {
        names.push(match[1]);
    }
    console.log(names.join(","));
}
findVariableNames("__invalidVariable _evenMoreInvalidVariable_ _validVariable");