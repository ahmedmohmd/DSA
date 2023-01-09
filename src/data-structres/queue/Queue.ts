import QueueNode from "./QueueNode";

class Queue {
  size: number;
  first: QueueNode;
  last: QueueNode;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  peek(): QueueNode {
    return this.first;
  }

  dequeue(): QueueNode {
    if (this.size === 0) {
      return null;
    }

    if (this.size === 1) {
      const queuedNode = this.first;
      this.first = null;
      this.last = null;
      this.size--;

      return queuedNode;
    }

    const queuedNode = this.first;
    this.first = this.first.next;
    this.size--;

    return queuedNode;
  }
}

export default Queue;
