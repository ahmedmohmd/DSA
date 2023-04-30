import Node from "./node";

interface NE {
  node: Node;
  priority: number;
}

class NodeEntry implements NE {
  node: Node;
  priority: number;

  constructor(node: Node, priority: number) {
    this.node = node;
    this.priority = priority;
  }
}

export default NodeEntry;
