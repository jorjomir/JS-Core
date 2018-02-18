function matchAllWords(text) {
    let res=[];
    res=text.match(/\w+/g);
    console.log(res.join("|"))
}
matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');