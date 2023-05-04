import Edge from "./edge";

interface Node {
  value: string;
  edges: Array<Edge>;
}

class GraphNode implements Node {
  value: string;
  edges: Array<Edge>;

  constructor(value: string) {
    this.value = value;
    this.edges = [];
  }
}

export default GraphNode;
