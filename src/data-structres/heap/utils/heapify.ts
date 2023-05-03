class Heapify {
  private array: number[];

  constructor(array: number[]) {
    this.array = array;
  }

  public heapify() {
    let parentIndex = this.array.length / 2 - 1;
    for (let i = parentIndex; i >= 0; i--) {
      this.doHeapify(i);
    }

    return this.array;
  }

  private doHeapify(index: number): void {
    let largestIndex = index;

    let leftIndex = index * 2 + 1;
    if (
      leftIndex < this.array.length &&
      this.array.at(largestIndex) < this.array.at(leftIndex)
    ) {
      largestIndex = leftIndex;
    }

    let rightIndex = index * 2 + 2;
    if (
      rightIndex < this.array.length &&
      this.array.at(largestIndex) < this.array.at(rightIndex)
    ) {
      largestIndex = rightIndex;
    }

    if (largestIndex === index) {
      return;
    }

    [this.array[largestIndex], this.array[index]] = [
      this.array[index],
      this.array[largestIndex],
    ];

    this.doHeapify(largestIndex);
  }

  public get data(): number[] {
    return this.array;
  }
}

export default Heapify;
