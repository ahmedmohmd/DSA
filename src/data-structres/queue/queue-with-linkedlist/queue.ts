import QueueNode from "../utils/queue-node";

class Queue {
  private size: number;
  private first: QueueNode | null;
  private last: QueueNode | null;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  peek(): QueueNode | null {
    return this.first;
  }

  public dequeue(): QueueNode | null {
    if (this.first === null || this.last === null) {
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

    if (this.first === null && this.last === null) {
      this.first = node;
      this.last = node;
    } else {
      // ! There is a Problem Here!
      if (this.last) {
        this.last.next = node;
        this.last = node;
      }
    }

    this.size++;
  }

  public getSize(): number {
    return this.size;
  }
}

export default Queue;
