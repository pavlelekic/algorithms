
class Heap {
    _items = [];

    constructor(comparerFn) {
        this.comparerFn = comparerFn;
    }

    insertItem(newItem) {
        this._items.push(newItem);
        return this._bubbleUp(this._items.length - 1);
    }

    _bubbleUp(index) {
        const parentIndex = this._calcParentIndex(index);
        const parent = this._items[parentIndex];
        const newItem = this._items[index];

        if (this.comparerFn(parent, newItem) === -1) {
            this._swap(parentIndex, index);
            if (this._hasParent(parentIndex)) {
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
        const leftChildIndex = this._calcLeftChildIndex(index);
        const rightChildIndex = this._calcRightChildIndex(index);
        const i = this.items;
        const comparison = this.comparerFn(i[leftChildIndex], i[rightChildIndex]);

        if (comparison === 1) {
            this._swap(leftChildIndex, index);
            return this._bubbletDown(leftChildIndex);
        }
        if (comparison === -1) {
            this._swap(rightChildIndex, index);
            return this._bubbleDown(rightChildIndex);
        }

        return index;
    }

    _calcLeftChildIndex(parentIndex) {
        return parentIndex * 2;
    }

    _calcRightChildIndex(parentIndex) {
        return parentIndex * 2 + 1;
    }

    _calcParentIndex(index) {
        return Math.floor(index / 2);
    }

    _swap(indexA, indexB) {
        const tmp = this._items[indexA];
        this._items[indexA] = this._items[indexB];
        this._items[indexB] = tmp;
    }

    getTopItem() {
        return this._items[0];
    }

    removeTopItem() {
        const lastItem = this._items.pop();
        this._items[0] = lastItem;
        this._bubbleDown(0);
    }
}
