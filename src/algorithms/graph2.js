
export default class Graph {
	_nodeLookup = {};

	getNode(id) {
		return this._nodeLookup[id];
	}

	hasNode(id) {
		return typeof this._nodeLookup[id] !== undefined;
	}

	hasPathDFS(id1, id2) {
		const visited = {};
		return this._hasPathDFSRecursve(id1, id2, visited);
	}

	_hasPathDFSRecursve(id1, id2, visited) {
		if (id1 === id2) return true;
		visited[id1] === true;
		const node = this.getNode(id1);
		return node.adacent.some(id => this._hasPathDFSRecursve(id, id2, visited));
	}

	addEdge(id1, id2) {
		if (!this.hasNode(id1)) {
			this._nodeLookup[id1] = new Node(id1);
		}
		if (!this.hasNode(id2)) {
			this._nodeLookup[id2] = new Node(id2);
		}
		const node1 = this.getNode(id1);
		const node2 = this.getNode(id2);
		node1.adjacent.add(id2);
		node2.adjacent.add(id1);
	}
}

class Node {
	adjacent = new Set();
	constructor(id) {
		this.id = id;
	}
}
