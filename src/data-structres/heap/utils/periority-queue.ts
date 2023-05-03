import Heap from "../heap";

class PriorityQueue<T> {
  private heap: Heap;
  private data: Map<number, T>;

  constructor() {
    this.heap = new Heap();
    this.data = new Map();
  }

  public enqueue(item: T, priority: number): void {
    this.heap.insert(priority);
    this.data.set(priority, item);
  }

  public dequeue() {
    const deletedItem = this.heap.remove();
    return this.data.get(deletedItem);
  }

  get size(): number {
    return this.heap.getSize;
  }
}

export default PriorityQueue;
