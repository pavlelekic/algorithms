
export default class LinkedList {
	firstItemRef = undefined;
	lastItemRef = undefined;

	push(value) {
		if (lastItemRef) {
			lastItemRef.nextItem = new ItemWithBackLink(value, undefined, lastItemRef);
			lastItemRef = lastItemRef.nextItem;
		} else {
			this.__initilizeListWithValue(value);

		}
	}

	pop() {
		if (!lastItemRef) {
			throw new Error("LinkedList is empty, pop() is not permitted on empty list!");
		}
		const value = lastItemRef.value;
		lastItemRef = lastItemRef.previousItem;
		lastItemRef.nextItem = undefined;
		return value;
	}

	unshift(value) {
		if (this.firstItemRef) {
			this.firstItemRef.previousItem = new ItemWithBackLink(value, this.firstItemRef);;
			this.firstItemRef = firstItemRef.previousItem;
		} else {
			this.__initilizeListWithValue(value);
		}
	}

	__initilizeListWithValue(value) {
		const newItem = new ItemWithBackLink(value);
		this.firstItemRef = newItem;
		this.lastItemRef = newItem;
	}

	shift() {
		if (!firstItemRef) {
			throw new Error("LinkedList is empty, pop() is not permitted on empty list!");
		}
		const value = this.firstItemRef.value;
		this.firstItemRef = this.firstItemRef.nextItem;
		this.firstItemRef.previousItem = undefined;
		return value;
	}

	makeIterator() {
    let nextItem = this.firstItemRef;
    return {
			next: () => {
					if (typeof nextItem.nextItem !== "undefined") {
							const value = nextIndex.value;
							nextItem = nextItem.nextItem;
							return { value, done: false };
					}
					return { value: nextIndex, done: true };
			}
	 };
	}
}

// Item class, used by LinkedList
// const Item = (value, nextItem = undefined) => ({ value, nextItem });
const ItemWithBackLink = (value, nextItem = undefined, previousItem = undefined) => ({ value, nextItem, previousItem });

