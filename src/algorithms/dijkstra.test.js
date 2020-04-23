import WeightedGraph from './WeightedGraph';
import dijkstra from './dijkstra';

test.skip('Test graph #1', () => {
    const graph = new WeightedGraph(6);
    graph.addEdge(0, 1, 27);
    graph.addEdge(0, 2, 8);
    graph.addEdge(1, 3, 1);
    graph.addEdge(2, 4, 4);
    graph.addEdge(3, 4, 7);

    const response = dijkstra(0);
    
    expect(response).toEqual({
        previousVertex: [ undefined, ],
        shortestDistanceFromStartingVertex: []
    });
});
