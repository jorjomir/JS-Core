function findOccurencesInWord(str, word) {
    let count=0;
    let regex=new RegExp("\\b"+word.toLowerCase()+"\\b", "g");
    let match;
    //let match=regex.exec(str);
    while(match=regex.exec(str.toLowerCase())) {
        count++;
    }
    console.log(count);
}
findOccurencesInWord("The waterfall was so high, that the child couldn’t see its peak.", "the");