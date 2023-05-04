import Node from "./node";

interface Edge {
  from: Node;
  to: Node;
  weight: number;
}

class GraphEdge implements Edge {
  from: Node;
  to: Node;
  weight: number;

  constructor(from: Node, to: Node, weight: number) {
    this.to = to;
    this.from = from;
    this.weight = weight;
  }
}

export default GraphEdge;
