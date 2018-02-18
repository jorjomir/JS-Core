function usernames(arr) {
    let output="";
    for (let i = 0; i < arr.length; i++) {
        let splitted=arr[i].split("@");
        output+=splitted[0];
        output+=".";
        let domain=splitted[1].split(".");
        for (let j = 0; j < domain.length; j++) {
            output+=domain[j][0];
        }
        if(i!==arr.length-1) {
            output+=", ";
        }

    }
    console.log(output)
}
usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);