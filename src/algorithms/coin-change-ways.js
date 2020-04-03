
export default function solution(denominationsArr, N) {
	const numWays = new Array(N + 1);
	let jumpingPoint;
	let target;

	for (let n = 0; n <= N; n++) {
		denominationsArr.forEach(denomination => {
			numWays[n][denomination] = 0;

			jumpingPoint = n - denomination;
			target = numWays[n][denomination];
			if (jumpingPoint >= 0) {
				for (let i = 0; i < denominationsArr.length && denominationsArr[i] <= denomination; i++) {
					target += 1 + numWays[jumpingPoint][denominationsArr[i]];
				}
			}
		});
	}

	let sum = 0;
	const ways = numWays[N];
	denominationsArr.forEach(denomination => {
		sum += ways[denomination] ? ways[denomination] : 0;
	});

	return sum;
}