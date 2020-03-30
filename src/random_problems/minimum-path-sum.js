
export default function solution(matrix) {
	const minSumMatrix = new Array(matrix.length);

	for (let row = 0; row < matrix.length; row++) {
		minSumMatrix[row] = new Array(matrix[0].length);
		for (let col = 0; col < matrix[0].length; col++) {
			if (col === 0 && row === 0) {
				// just take matrix value at that cell
				minSumMatrix[0][0] = matrix[0][0];
			} else if (col === 0) {
				// just look at the top value
				minSumMatrix[row][col] = minSumMatrix[row-1][col] +  matrix[row][col];
			} else if (row === 0) {
				// just look at the left value
				minSumMatrix[row][col] = minSumMatrix[row][col-1] +  matrix[row][col];
			} else {
				// look both top and left value
				minSumMatrix[row][col] = Math.min(minSumMatrix[row][col-1], minSumMatrix[row-1][col]) +  matrix[row][col];
			}
		}
	}

	return minSumMatrix[matrix.length - 1][matrix[0].length - 1];
}
