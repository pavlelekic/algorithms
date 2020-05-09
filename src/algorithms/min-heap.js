
export default class MinHeap {
	constructor(compareFn) {
		this.__compareFn = compareFn;
		this.__heap = [ 0 ]; // this element is ignored because indexing starts from 1, not 0
	}

	__calcParentIndex(childIndex) {
		return Math.floor(childIndex / 2);
	}

	__calcLeftChildIndex(parentIndex) {
		return parentIndex * 2;
	}

	__calcRightChildIndex(parentIndex) {
		return parentIndex * 2 + 1;
	}

	__bubbleUp(index) {
		if (index === 1) return; // you reached the top
		const parentIndex = this.__calcParentIndex(index);
		if (this.__isSmaller(index, parentIndex)) {
			this.__swap(parentIndex, index);
			this.__bubbleUp(parentIndex);
		}
	}

	__isSmaller(index1, index2) {
		return this.__compareFn(this.__heap[index1], this.__heap[index2]) < 0;
	}

	__lastElIndex() {
		return this.__heap.length - 1;
	}

	__isLastLevel(index) {
		return index > Math.floor(this.size() / 2); // last half of items are on the bottom level
	}

	__bubbleDown(index) {
		if (this.__isLastLevel(index)) return;
		// console.log(`Bubbling down item ${this.__heap[index]}, ${JSON.stringify(this.__heap)}`);
		const leftChildIndex = this.__calcLeftChildIndex(index);
		const rightChildIndex = this.__calcRightChildIndex(index);

		if (rightChildIndex > this.__lastElIndex() || this.__isSmaller(leftChildIndex, rightChildIndex)) {
			this.__swapSmallerAndBubbleDown(leftChildIndex, index);
		} else {
			this.__swapSmallerAndBubbleDown(rightChildIndex, index);
		}
		// console.log(`Heap after bubble down ${JSON.stringify(this.__heap)}`);
	}

	__swapSmallerAndBubbleDown(childIndex, parentIndex) {
		if (this.__isSmaller(childIndex, parentIndex)) {
			this.__swap(childIndex, parentIndex);
			this.__bubbleDown(childIndex);
		}
	}

	__swap(index1, index2) {
		const tmp = this.__heap[index1];
		this.__heap[index1] = this.__heap[index2];
		this.__heap[index2] = tmp;
	}

	insert(value) {
		this.__heap.push(value);
		this.__bubbleUp(this.__lastElIndex());
		// console.log(`Inserted ${value}`, this.__heap);
	}

	getTopItem = () => this.__heap[1];

	removeTopItem() {
		if (this.__heap.length > 1) {
			this.__heap[1] = this.__heap[this.__lastElIndex()];
			this.__heap.pop();
			this.__bubbleDown(1);
		}
	}

	size = () => this.__heap.length - 1; // because of the first el 0
}
