
export default function swap(indexA, indexB, arr) {
	let tmp = arr[indexA];
	arr[indexA] = arr[indexB];
	arr[indexB] = tmp;
}
