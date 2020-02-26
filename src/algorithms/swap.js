
export default function swap(a, b, arr) {
	let tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
}
