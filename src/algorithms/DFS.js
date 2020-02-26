import Graph from './Graph';

export default class DFS {
	constructor(graph) {
		this.graph = graph;
	}

	findPath(a, endNode) {

	}
}

function dfs(graph, currentNode, endNode, pathStack = []) {
	pathStack.push(currentNode);

	if (currentNode === endNode) {
		return pathStack;
	}

	graph.setVisited(currentNode);
	let adjacent = graph.adjacent(currentNode);

	for (let i = 0; i < adjacent.length; i++) {
		if (!graph.isVisited(adjacent[i])) {
			return dfs(graph, adjacent[i], endNode, pathStack);
		}
	}

	pathStack.pop();
	return pathStack;

	.forEach(adj => {
		if (!graph.isVisited(adj)) {
			if (adj === endNode) {
				return pathStack;
			} else {
				dfs()
			}
		}
	});
}








