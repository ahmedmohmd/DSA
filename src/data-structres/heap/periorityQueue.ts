import Heap from "./heap";

interface QueueItem<T> {
  item: T;
  priority: number;
}

class PriorityQueue<T> {
  private heap: QueueItem<T>[];

  constructor() {
    this.heap = [];
  }

  get size(): number {
    return this.heap.length;
  }

  public enqueue(item: T, priority: number): void {
    this.heap.push({ item, priority });
    this.bubbleUp(this.heap.length - 1);
  }

  public dequeue(): T {
    const min = this.heap[0];
    const end = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown(0);
    }
    return min.item;
  }

  private bubbleUp(index: number): void {
    const element = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (element.priority >= parent.priority) {
        break;
      }
      this.heap[index] = parent;
      index = parentIndex;
    }
    this.heap[index] = element;
  }

  private bubbleDown(index: number): void {
    const element = this.heap[index];
    const length = this.heap.length;
    while (true) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let leftChild: QueueItem<T> | undefined,
        rightChild: QueueItem<T> | undefined;
      let swap: number | null = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild!.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) {
        break;
      }

      this.heap[index] = this.heap[swap];
      index = swap;
    }

    this.heap[index] = element;
  }
}

// class PeriorityQueue {
//   private heap: Heap;

//   constructor() {
//     this.heap = new Heap();
//   }

//   public enqueue(number: number) {
//     this.heap.insert(number);
//   }

//   public dequeue() {
//     return this.heap.remove();
//   }

//   isEmpty(): boolean {
//     return this.heap.isEmpty;
//   }
// }

export default PriorityQueue;
