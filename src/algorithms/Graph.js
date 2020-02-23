

export default class Graph {
	constructor(capacity) {
		this.adjacentVertices = [];
		for (let i = 0; i < capacity; i++) {
			this.adjacentVertices.push(new Uint8Array());
		}
	}

	addEdge(a, b) {
		this.addAdjacentVertex(a, b);
		this.addAdjacentVertex(b, a);
	}

	addAdjacentVertex(a, b) {
		this.adjacentVertices[a].push(b);
	}

	degree = (a) => this.adjacentVertices[a].length;

	numEdges = () => this.adjacentVertices.reduce((acc, curr) => acc + curr.length, 0) / 2;

	numVertices = () => this.adjacentVertices.length;
}
