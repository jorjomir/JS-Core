function airPollution(matrixRows, arr) {
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));
    for (let obj of arr) {
        let cmd=obj.split(" ");
        if(cmd[0]==="breeze") {
            for (let i = 0; i < 5; i++) {
                matrix[Number(cmd[1])][i]-=15;
            }
        } else if(cmd[0]==="gale") {
            for (let i = 0; i < 5; i++) {
                matrix[i][Number(cmd[1])]-=20;
            }
        } else if(cmd[0]==="smog") {
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    matrix[i][j]+=Number(cmd[1]);
                }
            }
        }
    }
    let nopolluted=0;
    let output="Polluted areas: ";
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if(matrix[i][j]>=50) {
                output+=`[${i}-${j}], `;
                nopolluted+=1;
            }
        }
    }
    if(nopolluted===0) {
        console.log("No polluted areas");
    } else {
        let output2=output.slice(0, output.length-2);
        console.log(output2);
    }
}
airPollution([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ], ["breeze 1", "gale 2", "smog 25"]
);