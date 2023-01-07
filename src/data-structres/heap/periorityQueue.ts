import Heap from "./heap";

class PeriorityQueue {
  private heap: Heap;

  constructor() {
    this.heap = new Heap();
  }

  public enqueue(number: number) {
    this.heap.insert(number);
  }

  public dequeue() {
    return this.heap.remove();
  }

  isEmpty(): boolean {
    return this.heap.isEmpty;
  }
}

export default PeriorityQueue;
