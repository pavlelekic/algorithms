// take arr end

function _bestSolution(arr, end, cache) {
	if (typeof cache[end] !== 'undefined') return cache[end];
	const highestScore = end === 0 ? arr[end] : arr[end] + Math.max(
		_bestSolution(arr, Math.max(end - 1, 0), cache),
		_bestSolution(arr, Math.max(end - 2, 0), cache),
		_bestSolution(arr, Math.max(end - 3, 0), cache),
		_bestSolution(arr, Math.max(end - 4, 0), cache),
		_bestSolution(arr, Math.max(end - 5, 0), cache),
		_bestSolution(arr, Math.max(end - 6, 0), cache),
	);

	cache[end] = highestScore;
	return highestScore;
}

export default function solution(arr) {
	const cache = sameValuesArr(undefined, arr.length);
	return _bestSolution(arr, arr.length - 1, cache);
}

function sameValuesArr(value, size) {
	const arr = [];
	for (let i = 0; i < size; i++) arr.push(value);
	return arr;
}