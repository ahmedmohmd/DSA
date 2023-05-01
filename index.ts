import Graph from "./src/data-structres/graph/undirected-graph/graph";

let graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");

graph.addEdge("A", "B", 3);
graph.addEdge("B", "D", 4);
graph.addEdge("C", "D", 5);
graph.addEdge("A", "C", 1);
graph.addEdge("B", "C", 2);

const tree = graph.minimumSpanningTree();

tree.print();
// console.log();

// // graph.addEdge("C", "A", 4);
// // graph.addEdge("A", "B", 4);

// console.log(graph.getShortestDistance("A", "E"));
