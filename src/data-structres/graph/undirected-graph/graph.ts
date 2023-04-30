import PriorityQueue from "../../heap/periorityQueue";
import Edge from "./edge";
import Node from "./node";
import NodeEntry from "./node-entry";

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

    fromNode.edges.push(new Edge(toNode, weight));
    toNode.edges.push(new Edge(fromNode, weight));
  }

  public getShortestDistance(from: string, to: string): Array<Node> {
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
      visited.add(current);

      for (let edge of current.edges) {
        if (visited.has(edge.to)) continue;

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
      result.push(stack.pop());
    }

    return result;
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
