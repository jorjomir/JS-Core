function parseTheEmployeeData(arr) {
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;
    let m;
    let res=[];
    for (let i = 0; i < arr.length; i++) {
        m=regex.exec(arr[i]);
        if(m) {
            console.log(`Name: ${m[1]}\nPosition: ${m[3]}\nSalary: ${m[2]}`);
        }
    }
}
parseTheEmployeeData("Isacc - 1000 - CEO", "Ivan - 500 - Employee", "Peter - 500 - Employee");