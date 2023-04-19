import QueueNode from "./queue-node";

class QueueByArray {
  private data: any[];

  constructor() {
    this.data = [];
  }

  peek(): QueueNode {
    return this.data[0];
  }

  public dequeue(): QueueNode {
    return this.data.shift();
  }

  public enqueue(value: any) {
    this.data.push(value);
  }

  public getSize(): number {
    return this.data.length;
  }
}

export default QueueByArray;
