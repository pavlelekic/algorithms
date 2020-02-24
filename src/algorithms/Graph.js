

export default class Graph {
	constructor(capacity) {
		this.__adjacentVertices = [];
		for (let i = 0; i < capacity; i++) {
			this.__adjacentVertices.push(new Uint8Array());
		}
	}

	addEdge(a, b) {
		this.__adjacentVertices[a].push(b);
		this.__adjacentVertices[b].push(a);
	}

	adjacent(a) {
		this.__adjacentVertices[a];
	}

	degree = (a) => this.__adjacentVertices[a].length;

	numEdges = () => this.__adjacentVertices.reduce((acc, curr) => acc + curr.length, 0) / 2;

	numVertices = () => this.__adjacentVertices.length;
}
