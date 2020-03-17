
import swap from './swap';

export default function bubbleSort(arr) {
	let shouldBubble = true;
	let lastUnsorted = arr.length;
	while(shouldBubble) {
		shouldBubble = false;
		for (let i = 1; i < lastUnsorted; i++) {
			if (arr[i - 1] > arr[i]) {
				swap(i - 1, i, arr);
				shouldBubble = true;
			}
		}
		lastUnsorted--;
	}
}