import MinHeap from '../algorithms/heap2';

export default function solution(arr) {
	const minCompare = (a, b) => {
		if (a === b) {
			return 0;
		} else if (a < b) {
			return 1;
		} else {
			return -1;
		}
	};
	const maxCompare = (a, b) => -minCompare(a, b);

	const minHeap = new MinHeap(minCompare);
	const maxHeap = new MinHeap(maxCompare);
	const medians = new Array(arr.length);
	let smallerHeap;
	medians[0] = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] >= medians[i - 1]) {
			minHeap.insert(arr[i]);
		} else {
			maxHeap.insert(arr[i]);
		}

		smallerHeap = minHeap.size() <= maxHeap.size() ? minHeap : maxHeap;
		largerHeap = minHeap.size() <= maxHeap.size() ? minHeap : maxHeap;

		if (Math.abs(minHeap.size() - maxHeap.size()) > 1) {
			// rebalance
			smallerHeap.insert(largerHeap.getTopItem());
			largerHeap.removeTopItem();
		}

		medians[i] = smallerHeap.size() === largerHeap.size() ? (smallerHeap.getTopItem() + largerHeap.getTopItem()) / 2 : largerHeap.getTopItem();
	}

	return medians;
}
