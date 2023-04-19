import QueueNode from "./queue-node";

class Queue {
  private size: number;
  private first: QueueNode;
  private last: QueueNode;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  peek(): QueueNode {
    return this.first;
  }

  public dequeue(): QueueNode {
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

  public enqueue(value: any) {
    const node = new QueueNode(value);

    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.size++;
  }

  public getSize(): number {
    return this.size;
  }
}

export default Queue;
