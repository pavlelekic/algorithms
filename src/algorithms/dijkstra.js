import sameValuesArr from './sameValuesArr';

export default function dijkstra(graph, startingVertex) {
    const previousVertex = new Uint8Array(capacity);
    const shortestDistanceFromStartingVertex = sameValuesArr(Number.POSITIVE_INFINITY, graph.capacity());
    const queue = [startingVertex];
    const visited = sameValuesArr(false, graph.capacity());

    let w, adjacent, currentNode;
    while(queue.length > 0) {
        currentNode = queue.unshift();
        if (visited[currentNode]) return;
    
        visited[currentNode] = true;
        adjacent = graph.adjacent(currentNode);
        adjacent.forEach(a => {
            queue.push(a);
            w = graph.weight(currentNode, a);
            if (typeof previousVertex[a] === 'undefined' || (
                shortestDistanceFromStartingVertex[a] > shortestDistanceFromStartingVertex[currentNode] + w
            )) {
                previousVertex[a] = currentNode;
                shortestDistanceFromStartingVertex[a] = shortestDistanceFromStartingVertex[currentNode] + w;
            }
        });
    }

    return {
        previousVertex,
        shortestDistanceFromStartingVertex
    };
}
