

export default class Graph {
	constructor(capacity) {
		this.adjacentVertices = new Uint32Array(capacity);
	}

	addEdge(a, b) {
		this.addAdjacentVertex(a, b);
		this.addAdjacentVertex(b, a);
	}

	addAdjacentVertex(a, b) {
		if (!Array.isArray(this.adjacentVertices[a])) {
			this.adjacentVertices[a] = [];
		}

		this.adjacentVertices[a].push(b);
	}

	degree = (a) => Array.isArray(this.adjacentVertices[a]) ? this.adjacentVertices[a].length : 0;

	numEdges = () => this.adjacentVertices.reduce((acc, curr) => acc + this.degree(curr), 0) / 2;
}
