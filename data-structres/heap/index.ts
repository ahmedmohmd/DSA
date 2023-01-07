class Heap {
  data: number[];
  size: number;

  constructor() {
    this.data = [];
    this.size = 0;
  }

  insert(value: number) {
    this.data.push(value);
    this.size++;

    this.bubbleUp();
  }

  parent(index) {
    let parentIndex = Math.floor((index - 1) / 2);

    return parentIndex;
  }

  bubbleUp() {
    let index = this.size - 1;

    while (index > 0 && this.data[index] > this.data[this.parent(index)]) {
      [this.data[index], this.data[this.parent(index)]] = [
        this.data[this.parent(index)],
        this.data[index],
      ];

      index = this.parent(index);
    }
  }

  public remove() {
    if (this.isEmpty) {
      throw new Error("The Heap is Empty!");
    }

    let poppedItem = this.data.shift();
    this.size--;

    let index = 0;

    while (index <= this.size && !this.isValidParent(index)) {
      let largerChildIndex = this.getLargerIndex(index);

      [this.data[index], this.data[largerChildIndex]] = [
        this.data[largerChildIndex],
        this.data[index],
      ];

      index = largerChildIndex;
    }

    return poppedItem;
  }

  //    Accecoures
  private leftChildIndex(index) {
    return index * 2 + 1;
  }

  private rightChildIndex(index) {
    return index * 2 + 2;
  }

  private leftChild(index) {
    return this.data[this.leftChildIndex(index)];
  }

  private rightChild(index) {
    return this.data[this.rightChildIndex(index)];
  }

  private isValidParent(index) {
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

  private getLargerIndex(index) {
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

  get isEmpty() {
    return this.size === 0;
  }
}
