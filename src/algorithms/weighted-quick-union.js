
export default class WeightedQuickUnion {
	constructor(capacity) {
		const items = new Array(capacity);
		const heights = new Array(capacity);

		for (let i = 0; i < capacity; i++) {
			items[i] = i;
			heights[i] = 1;
		}

		this.items = items;
	}

	connect(a, b) {
		const aRoot = this.__findRoot(a);
		const bRoot = this.__findRoot(b);

		if (this.heights[aRoot] < this.heights[bHeight]) {
			this.items[aRoot] = bRoot;
			this.heights[bRoot] += this.heights[aRoot];
		} else {
			this.items[bRoot] = aRoot;
			this.heights[aRoot] += this.heights[bRoot];
		}
	}

	__findRoot(item) {
		const {items} = this;
		let i = item;
		while (i !== items[i] ) {
			items[i] = items[items[i]];
			i = items[i];
		}
		return i;
	}

	isConnected = (a, b) => this.__findRoot(a) === this.__findRoot(b);
}
