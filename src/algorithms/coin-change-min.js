
export default function solution(denominationsArr, N) {
	const minSoFar = new Array(N + 1);
	minSoFar[0] = 0;

	for (let n = 1; n <= N; n++) {
		minSoFar[n] = Number.POSITIVE_INFINITY;

		denominationsArr.forEach(denomination => {
			if (n - denomination >= 0) {
				minSoFar[n] = Math.min(minSoFar[n], 1 + minSoFar[n - denomination]);
			}
		});
	}

	return minSoFar[N];
}