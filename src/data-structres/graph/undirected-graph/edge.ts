import Node from "./node";

interface Edge {
  to: Node;
  weight: number;
}

class GraphEdge implements Edge {
  to: Node;
  weight: number;

  constructor(to: Node, weight: number) {
    this.to = to;
    this.weight = weight;
  }
}

export default GraphEdge;
