import sameValuesArr from '../../algorithms/sameValuesArr';

function maxScoreAtPosition(scores, position, cache) {
	if (position < 0) return 0;
	if (cache[position] === undefined) {
		cache[position] = scores[position] + Math.max(
			maxScoreAtPosition(scores, Math.max(position - 1, 0), cache),
			maxScoreAtPosition(scores, Math.max(position - 2, 0), cache),
			maxScoreAtPosition(scores, Math.max(position - 3, 0), cache),
			maxScoreAtPosition(scores, Math.max(position - 4, 0), cache),
			maxScoreAtPosition(scores, Math.max(position - 5, 0), cache),
			maxScoreAtPosition(scores, Math.max(position - 6, 0), cache),
		);
	}

	return cache[position];
}

export default function solution(scores) {
	const cache = new Array(scores.length);
	return maxScoreAtPosition(scores, scores.length - 1, cache);
}
