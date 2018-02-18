function checkIfString(str, word) {
    let checker=0;
    for (let i = 0; i < word.length; i++) {
        if(str[i]===word[i]) {
            checker=1;
        } else {
            checker=2;
            break;
        }

    }
    if(checker===1) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
checkIfString("opa az sym az", "opa aZ");