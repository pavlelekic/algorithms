import Graph from './Graph';
import dfs from './DFS';

const generateGraph = () => {
    const graph = new Graph(10);
    graph.addEdge(0, 2);
    graph.addEdge(1, 2);
    graph.addEdge(4, 2);
    graph.addEdge(3, 5);
    graph.addEdge(6, 4);
    graph.addEdge(5, 7);
    graph.addEdge(3, 5);
    graph.addEdge(9, 2);
    graph.addEdge(9, 1);
    graph.addEdge(5, 1);
    graph.addEdge(3, 4);
    return graph;
}

test('Test dfs', () => {
    const graph = generateGraph();
    expect(dfs(graph, 3, 7)).toEqual(true);
});
