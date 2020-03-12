
export default class Graph {
	_nodeLookup = {};

	getNode(id) {
		return this._nodeLookup[id];
	}

	hasNode(id) {
		return typeof this._nodeLookup[id] !== undefined;
	}

	hasPathDFS(source, destination) {
		const visited = {};
		return this._hasPathDFSRecursve(source, destination, visited);
	}

	_hasPathDFSRecursve(source, destination, visited) {
		if (visited[source.id] === true) return false;
		if (source.id === destination.id) return true;
		visited[source.id] === true;
		return source.adacent.some(id => {
			const node = this.getNode(id);
			return this._hasPathDFSRecursve(node, destination, visited)
		});
	}

	hasPathBFS(source, destination) {
		const queue = [source];
		return this._hasPathBFSRecursive(queue, destination);
	}

	_hasPathBFSRecursive(queue, destination) {
		if (queue.length === 0) return false;
		const current = queue.unshift();
		if (current.id === destination.id) return true;
		queue = queue.concat(current.adjacent);
		return this._hasPathBFSRecursive(queue, destination);
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
