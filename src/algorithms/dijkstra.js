import sameValuesArr from './sameValuesArr';

export default function dijkstra(graph, startingVertex) {
    const previousVertex = new Uint8Array(capacity);
    const shortestDistanceFromStartingVertex = sameValuesArr(Number.POSITIVE_INFINITY, graph.capacity());
    shortestDistanceFromStartingVertex[startingVertex] = 0;
    const queue = [startingVertex];
    const visited = sameValuesArr(false, graph.capacity());

    let w, currentNode;
    while(queue.length > 0) {
        currentNode = queue.unshift();
        if (visited[currentNode]) continue;
    
        visited[currentNode] = true;
        graph.adjacent(currentNode).forEach(a => {
            queue.push(a);
            w = graph.weight(currentNode, a);
            if (shortestDistanceFromStartingVertex[a] > shortestDistanceFromStartingVertex[currentNode] + w) {
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
