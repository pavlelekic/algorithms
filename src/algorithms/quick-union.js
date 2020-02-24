
export default class QuickUnion {
	constructor(capacity) {
		const items = new Array(capacity);
		for (let i = 0; i < capacity; i++) {
			items[i] = i;
		}

		this.items = items;
	}

	connect(a, b) {
		const aRoot = this.findRoot(a);
		const bRoot = this.findRoot(b);

		this.items[aRoot] = bRoot;
	}

	findRoot(el) {
		let i = el;
		const {items} = this;
		while (items[i] !== i) {
			i = items[i];
		}
		return i;
	}

	isConnected = (a, b) => this.findRoot(a) === this.findRoot(b);
}
