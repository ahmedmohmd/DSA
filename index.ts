const hasCycle = () => {
  const visisted = new Set();

  for (let node of this.nodes) {
    if (!visisted.has(node)) {
      //  Recursion funcion
    }
  }
};

const isCyclic = (node, parent, visisted) => {
  visisted.push(node);

  for (let edge of node.edges) {
    if (edge.to === parent) {
      continue;
    }

    if (visisted.has(edge) || isCyclic(node, parent, visisted)) {
      return true;
    }
  }

  return false;
};

// import Graph from "./src/data-structres/graph/undirected-graph/graph";

// let graph = new Graph();

// graph.addNode("A");
// graph.addNode("B");
// graph.addNode("C");

// graph.addEdge("A", "B", 10);
// graph.addEdge("B", "C", 4);
// // graph.addEdge("C", "A", 4);
// // graph.addEdge("A", "B", 4);

// console.log(graph.hasCycle());
