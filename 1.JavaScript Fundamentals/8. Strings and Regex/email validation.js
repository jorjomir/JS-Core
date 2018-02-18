function emailValidation(str) {
    if(str.match(/\w+@[a-z]+.[a-z]+(\.[a-z]+)+$/g)) {
        console.log("Valid")
    }
    else {
        console.log("Invalid")
    }
}
emailValidation("valid@email1.bg");