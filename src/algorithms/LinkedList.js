
export default class LinkedList {
	firstItemRef = undefined;

	push(value) {

	}

	pop() {

	}
}


// ListItem class, used by LinkedList
class ListItem {
	constructor(value) {
		this.value = value;
	}

	setNextItem = (nextItem) => this.nextItem = nextItem;
}
