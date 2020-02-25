import { convertStringToMatrix } from '../../helpers';

const calcRegionSize = (inputMatrix, row, column) => {
	if (row < 0 || row >= inputMatrix.length || column < 0 || column >= inputMatrix[0].length || inputMatrix[row][column] === 0) {
		return 0;
	}

	let size = 1;
	inputMatrix[row][column] = 0;
	for (let r = row - 1; r <= row + 1; r++) {
		for (let c = column - 1; c <= column + 1; c++) {
			size += calcRegionSize(inputMatrix, r, c);
		}
	}
	return size;
};

const solution = (inputMatrix) => {
	let size, maxSize = 0;
	for (let row = 0; row < inputMatrix.length; row++) {
		for (let column = 0; column < inputMatrix.length; column++) {
			size = calcRegionSize(inputMatrix, row, column);
			maxSize = Math.max(maxSize, size);
		}
	}
	return maxSize;
}

const input = `0001100
0100110
1101001
0000010
1100000
0001000`;

const testMatrix = convertStringToMatrix(input);

solution(testMatrix);
