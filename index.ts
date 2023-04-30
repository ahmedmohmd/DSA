import { PeriorityQueue } from "./src/data-structres/heap";

const getShortestPath = (from: string, to: string) => {
  const fromNode = this.nodes.get(from);
  if (!fromNode) {
    throw new Error(`Could not find FromNode`);
  }

  const toNode = this.nodes.get(to);
  if (!toNode) {
    throw new Error(`Could not find ToNode`);
  }

  const distances: Map<Node, number> = new Map();

  for (let node of this.nodes) {
    distances.set(node, Number.MAX_VALUE);
  }

  distances.set(fromNode, 0);

  return buildPath(fromNode, toNode, distances);
};

const buildPath = (fromNode, toNode, distances) => {
  const queue = new PeriorityQueue()
  queue.enqueue(fromNode,0)

  const visisted = new Set()
  const previouses = new Map()

  while(queue.size > 0) {
    const current = queue.dequeue()
    visisted.add(current)

    for(let edge of current.edges) {
      if(visisted.has(edge.to)) {
        continue
      }

      const newDistance = distances.get(fromNode) + edge.wight
      if(newDistance < distances.get(edge.to)) {
        distances.set(edge.to, newDistance)
        previouses.set(edge.to, current)
        queue.enqueue(edge.to)
      }
    }
  }

  const stack = []
  stack.push(toNode)
  let previous = previouses.get(toNode)

  while(previous !== null) {
    stack.push(previous)
    previous = previouses.get(previous)
  }

  
  return distances
  // queue.enqueue()
};
