import shuffle from './shuffle';
import swap from './swap';


function partition(arr, start, end) {
	if (arr.length < 2) {
		return arr;
	}

	const partitoningEl = arr[start];
	let lo = start + 1;
	let hi = end;

	while(true) {
		while (arr[hi] >= partitoningEl && lo < hi) hi--;
		while (arr[lo] <= partitoningEl && lo < hi) lo++;
		if (lo === hi) {
			return lo;
		} else {
			swap(lo, hi, arr);
		}
	}
}

function _quickSort(arr, start, end) {
	const partitioningElIndex = partition(arr, start, end);
	_quickSort(arr, start, partitioningElIndex);
	_quickSort(arr, partitioningElIndex + 1, end);
}

export default function quickSort(arr) {
	shuffle(arr);
	_quickSort(arr, 0, arr.length - 1);
}
