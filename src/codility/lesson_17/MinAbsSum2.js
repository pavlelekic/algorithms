
import sameValuesArr from '../../algorithms/sameValuesArr';

export default function solution(arr) {
	if (arr.length === 0) {
		return 0;
	}
	const cache = sameValuesArr(undefined, arr.length);
	return _solutionRecursive(arr, arr.length - 1, cache);
}

function _solutionRecursive(A, i, cache) {
	if (i === 0) return Math.abs(A[0]);
	if (typeof cache[i] !== 'undefined') return cache[i];
	const bestSolution = Math.min(Math.abs(_solutionRecursive(A, i - 1, cache) + A[i]), Math.abs(_solutionRecursive(A, i - 1, cache) - A[i]));
	cache[i] = bestSolution;
	return bestSolution;
}
