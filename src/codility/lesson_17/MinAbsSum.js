
export default function solution(arr) {
	if (arr.length === 0) {
		return 0;
	}
	const positiveArr = arr.map(a => Math.abs(a));
	positiveArr.sort((a, b) => a - b);
	const totalSum = positiveArr.reduce((acc, curr) => acc + curr, 0);
	const halfSum = totalSum >> 1;
	let sumSoFar = 0;
	let minDelta = Number.MAX_SAFE_INTEGER;
	positiveArr.forEach(a => {
		sumSoFar += a;
		minDelta = Math.min(minDelta, Math.abs(halfSum - sumSoFar));
	});

	return minDelta;
}
