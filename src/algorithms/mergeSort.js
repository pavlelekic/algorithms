import swap from "./swap";

export function merge(arr, tempArr, start, end) {
	const middle = Math.floor(arr.length / 2);
	let index = start;
	let leftIndex = start;
	let rightIndex = middle;
	while (leftIndex < middle && rightIndex <= end) {
		tempArr[index++] = arr[leftIndex] < arr[rightIndex] ? arr[leftIndex++] : arr[rightIndex++];
	}
	let remainderStart = rightIndex;
	let remainderEnd = end;
	if (leftIndex < middle) {
		remainderStart = leftIndex;
		remainderEnd = middle - 1;
	}
	for (let i = remainderStart; i <= remainderEnd; i++) {
		tempArr[index++] = arr[i];
	}
	// copy back to original
	for (let i = 0; i < arr.length; i++) arr[i] = tempArr[i];
}

function mergeSortRecursive(start, end, tempArr, arr) {

}

export default function mergeSort(arr) {
	const tempArr = new Array(arr.length);
	const middle = Math.floor(arr.length / 2);
	mergeSortRecursive(0, middle, tempArr, arr);
	mergeSortRecursive(middle + 1, arr.length - 1, tempArr, arr);
	merge(arr, tempArr, start, end);
}

