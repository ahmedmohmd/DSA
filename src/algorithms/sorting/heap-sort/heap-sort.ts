import Heap from "../../../data-structres/heap/heap";

class HeapSort {
  private static heap: Heap = new Heap();

  static sort(array: number[], desc?: boolean): number[] {
    this.fillHeap(array);

    if (desc) {
      HeapSort.sortDesc(array);
    } else {
      HeapSort.sortAsc(array);
    }

    return array;
  }

  private static fillHeap(array: number[]): void {
    for (let number of array) {
      HeapSort.heap.insert(number);
    }
  }

  private static sortDesc(array: number[]): void {
    let index = 0;
    while (index < array.length) {
      array[index] = HeapSort.heap.remove();
      index++;
    }
  }

  private static sortAsc(array: number[]): void {
    let index = array.length - 1;
    while (index >= 0) {
      array[index] = HeapSort.heap.remove();
      index--;
    }
  }
}

export default HeapSort;
