
export default class MinHeap {
	constructor(compareFn) {
		this.__compareFn = compareFn;
		this.__heap = [ 0 ]; // this element is ignored because indexing starts from 1, not 0
	}

	__calcParentIndex = (childIndex) => Math.floor(childIndex / 2);

	__calcLeftChildIndex = (parentIndex) => parentIndex * 2;

	__calcRightChildIndex = (parentIndex) => parentIndex * 2 + 1;

	__bubbleUp(index) {
		const parentIndex = this.__calcParentIndex(index);
		if (this.__compareFn(this.__heap[index], this.__heap[parentIndex] === -1)) {
			this.__swap(parentIndex, index);
			this.__bubbleUp(parentIndex);
		}
	}

	__bubbleDown(index) {
		const leftChildIndex = this.__calcLeftChildIndex(index);
		const rightChildIndex = this.__calcRightChildIndex(index);
		const isLeftChildSmallerThanRightChild = this.__compareFn(this.__heap[leftChildIndex], this.__heap[rightChildIndex]) === -1;

		if (isLeftChildSmallerThanRightChild) {
			if (this.__compareFn(this.__heap[leftChildIndex], this.__heap[index]) === -1) {
				this.__swap(index, leftChildIndex);
				this.__bubbleDown(leftChildIndex);

			}
		} else {
			if (this.__compareFn(this.__heap[rightChildIndex], this.__heap[index]) === -1) {
				this.__swap(index, leftChildIndex);
				this.__bubbleDown(rightChildIndex);
			}
		}
	}

	__swap(index1, index2) {
		const tmp = this.__heap[index1];
		this.__heap[index1] = this.__heap[index2];
		this.__heap[index2] = tmp;
	}

	insert(value) {
		this.__heap.push(value);
		this.__bubbleUp(this.__heap.length - 1);
	}

	getTopItem = () => this.__heap[1];

	removeTopItem() {
		if (this.__heap.length > 1) {
			this.__heap[1] = this.__heap[this.__heap.length - 1];
			this.__heap.pop();
			this.__bubbleDown(1);
		}
	}

	isEmpty = () => this.__heap.length === 1;

	size = () => this.__heap.length - 1;
}
