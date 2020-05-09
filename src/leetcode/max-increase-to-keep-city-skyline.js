
const val = (value) => typeof value === 'undefined' ? 0 : value;

export default function(matrix) {
    const rowMax = new Array(matrix.length);
    const colMax = new Array(matrix[0].length);

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            rowMax[row] = Math.max(val(rowMax[row]), matrix[row][col]);
            colMax[col] = Math.max(val(colMax[col]), matrix[row][col]);
        }
    }

    let sum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            sum += Math.min(rowMax[row], colMax[col]) - matrix[row][col];
        }
    }

    return sum;
}
