class Heap {
  private data: number[];
  private size: number;

  constructor() {
    this.data = [];
    this.size = 0;
  }

  public insert(value: number): void {
    this.data.push(value);
    this.size++;

    this.bubbleUp();
  }

  private parentIndex(index: number): number {
    let parentIndex = Math.floor((index - 1) / 2);

    return parentIndex;
  }

  private bubbleUp(): void {
    let index = this.size - 1;

    while (index > 0 && this.data[index] > this.data[this.parentIndex(index)]) {
      [this.data[index], this.data[this.parentIndex(index)]] = [
        this.data[this.parentIndex(index)],
        this.data[index],
      ];

      index = this.parentIndex(index);
    }
  }

  public remove(): number {
    if (this.isEmpty || this.data.length === 0) {
      throw new Error("The Heap is Empty!");
    }

    let poppedItem = this.data.shift()!;
    this.size--;

    this.bubbleDown();

    return poppedItem;
  }

  private bubbleDown(): void {
    let index: number = 0;

    while (index <= this.size && !this.isValidParent(index)) {
      let largerChildIndex: number = this.getLargerIndex(index);

      [this.data[index], this.data[largerChildIndex]] = [
        this.data[largerChildIndex],
        this.data[index],
      ];

      index = largerChildIndex;
    }
  }

  private leftChildIndex(index: number): number {
    return index * 2 + 1;
  }

  private rightChildIndex(index: number): number {
    return index * 2 + 2;
  }

  private leftChild(index: number): number {
    return this.data[this.leftChildIndex(index)];
  }

  private rightChild(index: number): number {
    return this.data[this.rightChildIndex(index)];
  }

  private isValidParent(index: number): boolean {
    if (!this.leftChild(index)) {
      return true;
    }

    if (!this.rightChild(index)) {
      return this.data[index] > this.leftChild(index);
    }

    if (
      this.data[index] > this.leftChild(index) &&
      this.data[index] > this.rightChild(index)
    ) {
      return true;
    }

    return false;
  }

  private getLargerIndex(index: number): number {
    if (!this.leftChild(index)) {
      return index;
    }

    if (!this.rightChild(index)) {
      return this.leftChildIndex(index);
    }

    return this.leftChild(index) > this.rightChild(index)
      ? this.leftChildIndex(index)
      : this.rightChildIndex(index);
  }

  public get isEmpty(): boolean {
    return this.size === 0;
  }

  public get getSize(): number {
    return this.size;
  }

  public get getData() {
    return this.data;
  }
}

export default Heap;
