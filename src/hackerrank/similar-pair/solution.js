import { convertStringToMatrix } from '../../helpers';
import Graph from '../../algorithms/Graph';

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

const solution = (n, k, edges) => {
	const graph = new Graph(n);
	let root = edges[0][0];
	edges.forEach(edge => {
		graph.addEdge(edge[0], edge[1]);
		if (root === edge[1]) {
			root = edge[0];
		}
	});

	// do dfs on root
}

const input = `0001100
0100110
1101001
0000010
1100000
0001000`;

const testMatrix = convertStringToMatrix(input);

solution(testMatrix);
