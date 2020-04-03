
export default function solution(N, allowedNumbers) {
	const numCombinations = new Array(N + 1);
	numCombinations[0] = 1;

	for (let n = 1; n <= N; n++) {
		numCombinations[n] = 0;
		for (let j = 0; n < allowedNumbers.length; j++) {

			if (n - allowedNumbers[j] >= 0) {
				numCombinations[n] += numCombinations[n - allowedNumbers[j]];
			}
		}
	}

	return numCombinations[N];
}
