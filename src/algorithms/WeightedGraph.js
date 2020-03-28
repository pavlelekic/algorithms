import Graph from './Graph';

export default class WeightedGraph extends Graph {
	constructor(capacity) {
		super(capacity);
        this.__weights = [];
		for (let i = 0; i < capacity; i++) {
            this.__weights.push(new Array(capacity)); // weight can be float
		}
	}

	addEdge(a, b, weight) {
		this.__adjacentVertices[a].push(b);
        this.__adjacentVertices[b].push(a);
        this.__weights[a][b] = weight;
        this.__weights[b][a] = weight;
    }

	weight = (a, b) => this.__weights[a][b];
}
