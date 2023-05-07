import Heap from "../heap";

class HeapSort {
  private array: number[];
  private heap: Heap;

  constructor(array: number[]) {
    this.array = array;
    this.heap = new Heap();
  }

  public sort(desc?: boolean): void {
    this.fillHeap();

    if (desc) {
      this.sortDesc();
    } else {
      this.sortAsc();
    }
  }

  private fillHeap(): void {
    for (let number of this.array) {
      this.heap.insert(number);
    }
  }

  private sortDesc(): void {
    let index = 0;
    while (index < this.array.length) {
      this.array[index] = this.heap.remove();
      index++;
    }
  }

  private sortAsc(): void {
    let index = this.array.length - 1;
    while (index >= 0) {
      this.array[index] = this.heap.remove();
      index--;
    }
  }

  public get data(): number[] {
    return this.array;
  }
}

export default HeapSort;
