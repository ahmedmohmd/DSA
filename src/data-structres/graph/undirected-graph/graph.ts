import PriorityQueue from "../../heap/utils/periority-queue";
import Edge from "./utils/edge";
import Node from "./utils/node";

class Graph {
  nodes: Map<string, Node>;

  constructor() {
    this.nodes = new Map();
  }

  public addNode(value: string): void {
    this.nodes.set(value, new Node(value));
  }

  public addEdge(from: string, to: string, weight: number): void {
    const fromNode = this.nodes.get(from);
    if (!fromNode) {
      throw new Error("Sorry, 'From Node' not Found!");
    }

    const toNode = this.nodes.get(to);
    if (!toNode) {
      throw new Error("Sorry, 'To Node' not Found!");
    }

    fromNode.edges.push(new Edge(fromNode, toNode, weight));
    toNode.edges.push(new Edge(fromNode, toNode, weight));
  }

  public getShortestPath(from: string, to: string): Array<Node> {
    const fromNode = this.nodes.get(from);
    if (!fromNode) {
      throw new Error("Sorry, 'From Node' not Found!");
    }

    const toNode = this.nodes.get(to);
    if (!toNode) {
      throw new Error("Sorry, 'To Node' not Found!");
    }

    const distances: Map<Node, number> = new Map();

    for (let node of this.nodes.values()) {
      distances.set(node, Number.MAX_VALUE);
    }

    distances.set(fromNode, 0);

    return this.buildPath(fromNode, toNode, distances);
  }

  private buildPath(
    fromNode: Node,
    toNode: Node,
    distances: Map<Node, number>
  ): Array<Node> {
    const previousNodes: Map<Node, Node> = new Map();

    const visited: Set<Node> = new Set();

    const queue: PriorityQueue<Node> = new PriorityQueue();
    queue.enqueue(fromNode, 0);

    while (queue.size > 0) {
      const current = queue.dequeue();

      if (visited.has(current)) continue;

      visited.add(current);

      for (let edge of current.edges) {
        const newDistance = distances.get(current) + edge.weight;

        if (newDistance < distances.get(edge.to)) {
          distances.set(edge.to, newDistance);

          previousNodes.set(edge.to, current);

          queue.enqueue(edge.to, newDistance);
        }
      }
    }

    const stack: Array<Node> = [];
    stack.push(toNode);
    let previous = previousNodes.get(toNode);

    while (previous) {
      stack.push(previous);
      previous = previousNodes.get(previous);
    }

    const result = [];
    while (stack.length > 0) {
      result.push(stack.pop().value);
    }

    return result;
  }

  public hasCycle(): boolean {
    const visited: Set<Node> = new Set();

    for (let node of this.nodes.values()) {
      if (!visited.has(node) && this.isCyclic(node, null, visited)) {
        return true;
      }
    }

    return false;
  }

  private isCyclic(node: Node, parent: Node, visited: Set<Node>): boolean {
    visited.add(node);

    for (let edge of node.edges) {
      if (edge.to === parent) {
        continue;
      }

      if (visited.has(edge.to) || this.isCyclic(edge.to, node, visited)) {
        return true;
      }
    }

    return false;
  }

  public minimumSpanningTree(): any {
    const tree = new Graph();

    if (!this.nodes) return tree;

    const edges = new PriorityQueue<Edge>();

    const startNode = this.nodes.values().next().value;

    startNode.edges.map((edge) => {
      edges.enqueue(edge, edge.weight);
    });

    tree.addNode(startNode.value);

    while (this.nodes.size > tree.nodes.size) {
      const minEdge = edges.dequeue();

      if (tree.nodes.has(minEdge.to.value)) {
        continue;
      }

      tree.addNode(minEdge.to.value);
      tree.addEdge(minEdge.from.value, minEdge.to.value, minEdge.weight);

      for (let edge of minEdge.to.edges) {
        if (!tree.nodes.has(edge.to.value)) {
          edges.enqueue(edge, edge.weight);
        }
      }
    }

    return tree;
  }

  public print(): void {
    for (let { value, edges } of this.nodes.values()) {
      console.log(
        `( ${value} ) Node: is Connected to => `,
        edges.length
          ? `{ ${edges.map(({ to: { value } }) => value).join(", ")} }`
          : "Not Connected"
      );
    }
  }
}

export default Graph;
