function biggestElement(matrix) {
    let min=Number.NEGATIVE_INFINITY;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j]>min) {
                min=matrix[i][j];
            }
        }
    }
    console.log(min);
}
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);