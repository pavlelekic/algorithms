
export default function solution(arr, el) {
	// Find first and last index of element in an array
	let first = firstOccurrence(arr, el);
	let last = firstOccurrence(arr, el + 1) -1;

	return first !== -1 && last !== -1 ? [first, last] : [-1, -1];
}

function firstOccurrence(arr, el) {
	let middle;
	let low = 0;
	let high = arr.length - 1;
	let firstOccurrence = -1;
	while (low <= high) {
		middle = Math.floor(low + (high - low) / 2);
		if (arr[middle] >= el) {
			firstOccurrence = middle;
			high = middle - 1;
		} else {
			low = middle + 1;
		}
	}
	return firstOccurrence;
}