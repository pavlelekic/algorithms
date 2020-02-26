import swap from "./swap";

function _sort(arr, start, end) {
	if (start === end) return;
	if (end - start === 1) {
		if (arr[end] < arr[start]) swap(start, end, arr);
		return;
	}
	const middle = start + ((end - start) >> 1);
	_sort(arr, start, middle);
	_sort(arr, middle + 1, end);
}

export default function mergeSort(arr) {
	return _sort(arr, 0, arr.length - 1);
}
