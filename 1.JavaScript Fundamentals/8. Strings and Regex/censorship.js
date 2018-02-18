function censorship(text, words) {
    for (let i = 0; i < words.length; i++) {
        let replaced='-'.repeat(words[i].length)
        while(text.indexOf(words[i])>-1) {
            text=text.replace(words[i], replaced);
        }
    }
    console.log(text);
}