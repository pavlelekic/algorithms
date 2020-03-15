import Graph from './Graph';

function isConnected(graph, currentNode, endNode) {
	graph.setVisited(currentNode);

	if (currentNode === endNode) {
		return true;
	}

	let adjacent = graph.adjacent(currentNode);
	let hasFound = false;

	for (let i = 0; i < adjacent.length; i++) {
		if (!graph.isVisited(adjacent[i])) {
			hasFound = dfs(graph, adjacent[i], endNode, pathStack);
			if (hasFound) return true;
		}
	}
}

export default function dfs(graph, startNode, endNode) {
	return isConnected(graph, currentNode, endNode, pathStack = []);
}
