import { default as GraphNode, default as Node } from "./graph-node";

class Graph {
  nodes: Map<string, Node>;
  adjancyList: Map<Node, Array<Node>>;

  constructor() {
    this.nodes = new Map();
    this.adjancyList = new Map();
  }

  public addVertex(value: string): void {
    const node = new Node(value);
    this.nodes.set(value, node);
    this.adjancyList.set(node, []);
  }

  public addEdge(from: string, to: string): void {
    const fromNode = this.nodes.get(from);
    if (!fromNode) {
      throw new Error("Sorry, 'From Node' not Found!");
    }

    const toNode = this.nodes.get(to);
    if (!toNode) {
      throw new Error("Sorry, 'To Node' not Found!");
    }
    this.adjancyList.get(fromNode).push(toNode);
  }

  public removeVertex(value: string): void {
    const targetNode = this.nodes.get(value);

    if (!targetNode) return;

    for (let node of this.adjancyList.keys()) {
      const targetIndex = this.adjancyList
        .get(node)
        .findIndex((node) => node.label === targetNode.label);
      this.adjancyList.get(node).splice(targetIndex, 1);
    }

    this.adjancyList.delete(targetNode);
    this.nodes.delete(value);
  }

  public removeEdge(from: string, to: string): void {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);

    if (!fromNode || !toNode) return;

    const targetIndex = this.adjancyList
      .get(fromNode)
      .findIndex((node) => node.label === toNode.label);
    this.adjancyList.get(fromNode).splice(targetIndex, 1);
  }

  public depthFirstTraverseRec(
    root: string,
    visited: Set<GraphNode> = new Set()
  ): void {
    const rootNode = this.nodes.get(root);

    if (!rootNode) {
      return;
    }

    console.log(rootNode.label);
    visited.add(rootNode);

    for (let node of this.adjancyList.get(rootNode)) {
      if (!visited.has(node)) {
        this.depthFirstTraverseRec(node.label, visited);
      }
    }
  }

  public depthFirstTraverseIter(root: string): void {
    const rooteNode = this.nodes.get(root);

    if (!rooteNode) return;

    const stack: Array<GraphNode> = [rooteNode];
    const visited: Set<GraphNode> = new Set();

    while (stack.length) {
      const current = stack.pop();

      if (visited.has(current)) {
        continue;
      }

      console.log(current.label);
      visited.add(current);

      for (let node of this.adjancyList.get(current)) {
        if (!visited.has(node)) {
          stack.push(node);
        }
      }
    }
  }

  public breathFirstTraverse(root: string): void {
    const rooteNode = this.nodes.get(root);

    if (!rooteNode) return;

    const queue: Array<GraphNode> = [rooteNode];
    const visited: Set<GraphNode> = new Set();

    while (queue.length) {
      const current = queue.shift();

      if (visited.has(current)) {
        continue;
      }

      console.log(current.label);
      visited.add(current);

      for (let node of this.adjancyList.get(current)) {
        if (!visited.has(node)) {
          queue.push(node);
        }
      }
    }
  }
  print(): void {
    for (let item of this.adjancyList) {
      console.log(
        `( ${item[0].label} ) Node: is Connected to => `,
        item[1].length
          ? `{ ${item[1].map((node) => node.label).join(", ")} }`
          : "Not Connected"
      );
    }
  }
}

export default Graph;
