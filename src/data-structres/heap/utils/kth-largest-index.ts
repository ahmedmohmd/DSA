import Heap from "../heap";

class KthLargestElement {
  private array: number[];
  private heap: Heap = new Heap();

  constructor(array: number[]) {
    this.array = array;

    for (let number of this.array) {
      this.heap.insert(number);
    }
  }

  public getKthLargestValue(order: number): number {
    let i = 0;
    let element: number = 0;

    while (i < order) {
      element = this.heap.remove();
      i++;
    }

    return element;
  }
}

export default KthLargestElement;
