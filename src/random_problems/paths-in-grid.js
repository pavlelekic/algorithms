
function maxSum(cache, matrix, row, col) {
    if (row === 0 && col === 0) return matrix[row][col];
    if (row < 0 || col < 0) return Number.POSITIVE_INFINITY;

    const ck = `${row}:${col}`;
    if (typeof cache[ck] === 'undefined') {
        cache[ck] = matrix[row][col] + Math.max(
            maxSum(cache, matrix, row - 1, col),
            maxSum(cache, matrix, row, col - 1)
        );
    }

    return cache[ck];
}

function solution(matrix) {
    return maxSum({}, matrix, matrix.length - 1, matrix[0].length - 1);
}
