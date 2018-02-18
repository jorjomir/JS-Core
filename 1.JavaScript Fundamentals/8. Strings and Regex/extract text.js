function extractText(str) {
    let output=[];
    let startindex=str.indexOf("(");
    while(startindex>-1) {
        let endindex=str.indexOf(')', startindex);
        if(endindex===-1) {
            break;
        }
        let snippet=str.substring(startindex+1,endindex);
        output.push(snippet);
        startindex=str.indexOf("(",endindex);
    }
console.log(output.join(", "));
}
extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');