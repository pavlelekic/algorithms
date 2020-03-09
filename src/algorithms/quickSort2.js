
import swap from './swap';

export default function quickSort(arr) {
	_quickSort(arr, 0, arr.length - 1);
}

export function _quickSort(arr, start, end) {
	if (start >= end) return;
	const pivotEl = arr[Math.round((start + end) / 2)];
	console.log(start, end, JSON.stringify(arr), pivotEl);

	const splitIndex = partition(arr, start, end, pivotEl);

	_quickSort(arr, start, splitIndex - 1);
	_quickSort(arr, splitIndex, end);
}


function partition(arr, start, end, pivotEl) {
	let left = start;
	let right = end;
	while (left <= right) {
		while (arr[right] > pivotEl && right >= start) right--;
		while (arr[left] < pivotEl && left <= end) left++;
		if (left <= right) swap(left++, right--, arr);
	}
	return left;
}
