
function mark(row, col, matrix) {
    if (row < matrix.length && col < matrix[0].length) {
        if (matrix[row][col] === undefined) {
            matrix[row][col] = 0;
        }

        if (row > 0) {
            matrix[row][col] += matrix[row - 1][col];
        }
        if (col > 0) {
            matrix[row][col] += matrix[row][col - 1];
        }
    }
}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(rows, cols) {
    const matrix = new Array(rows);
    for (let row = 0; row < rows; row++) {
        matrix[row] = new Array(cols);
    }
    
    matrix[0][0] = 1;
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            mark(row, col, matrix);
        }
    }

    // console.log(JSON.stringify(matrix));
    return matrix[rows - 1][cols - 1]; 
};
