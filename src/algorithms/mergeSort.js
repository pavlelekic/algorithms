
export function merge(arr, tempArr, start, end) {
	const middle = start + Math.floor((end - start) / 2);
	let index = start;
	let leftIndex = start;
	let rightIndex = middle;

	while (leftIndex < middle && rightIndex <= end)
		tempArr[index++] = arr[leftIndex] < arr[rightIndex] ? arr[leftIndex++] : arr[rightIndex++];

	// copy remaining elements
	let remainderStart = rightIndex;
	let remainderEnd = end;
	if (leftIndex < middle) {
		remainderStart = leftIndex;
		remainderEnd = middle - 1;
	}

	for (let i = remainderStart; i <= remainderEnd; i++)
		tempArr[index++] = arr[i];

	// copy back to original
	for (let i = start; i < end; i++)
		arr[i] = tempArr[i];
}

function mergeSortRecursive(start, end, tempArr, arr) {
	if (start >= end) return;
	const middle = start + Math.floor((end - start) / 2);
	mergeSortRecursive(start, middle, tempArr, arr);
	mergeSortRecursive(middle + 1, end, tempArr, arr);
	merge(arr, tempArr, start, end);
}

export default function mergeSort(arr) {
	mergeSortRecursive(0, arr.length - 1, new Array(arr.length), arr);
}
