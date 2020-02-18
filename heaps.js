
class MinHeap {
    _items = [];

    constructor(comparerFn) {
        this.comparerFn = comparerFn;
    }

    insertItem(newItem) {
        const newItemIndex = this._items.length;
        _items.push(newItem);
        return this._bubbleUp(newItemIndex);
    }

    _bubbleUp(index) {
        const parentIndex = this._getParentIndex(index);
        const parent = this._items[index];

        if (this.comparerFn(parent, newItem) === -1) {
            this._swap(parentIndex, index);

            if (!this._hasParent(parentIndex)) {
                return this._bubbleUp(parentIndex);
            }
            else {
                return parentIndex;
            }

        }
        else {
            return index;
        }
    }

    _bubbleDown(index) {
        const leftChildIndex= getLeftChildIndex(index);
        const rightChildIndex= getRightChildIndex(index);
        const i = this.items;
        const comparison = this.comparerFn(i[leftChildIndex], i[rightChildIndex]);

        if (comparison === 1) {
            this._swap(leftChildIndex, index);
            return this._bubbleDown(leftChildIndex);
        }
        if (comparison === -1) {
            this._swap(rightChildIndex, index);
            return this._bubbleDown(rightChildIndex);
        }

        return index;
    }

    _getParentIndex(index) {
        return Math.ceil((index - 2) / 2);
    }

    _swap(indexA, indexB) {
        const tmp = this._items[indexA];
        this._items[indexA] = this._items[indexB];
        this._items[indexB] = tmp;
    }

    getMin() {
        return this._items[0];
    }

    removeMinItem() {
        const lastItem = this._items.pop();
        this._items[0] = lastItem;
        this._bubbleDown(0);
    }
}
