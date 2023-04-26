import Graph from "./src/data-structres/graph/directed-graph/graph";

const graph = new Graph();

graph.addVertex("X");
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("P");

graph.addEdge("X", "A");
graph.addEdge("X", "B");
graph.addEdge("A", "P");
graph.addEdge("B", "P");

console.log(graph.topologicalSort());

// graph.removeVertex("B");

// graph.depthFirstTraverseRec("A");
// graph.breathFirstTraverse("g");
// graph.print();
