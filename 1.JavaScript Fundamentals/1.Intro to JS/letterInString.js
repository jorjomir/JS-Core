function letterInString(word, letter) {
    let count=0;
    for(i=0; i<word.length; i++){
        if(word[i]===letter) {
            count++;
        }
    }
    return count;
}
console.log(letterInString("Peshoooo", 'o'));