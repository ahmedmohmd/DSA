import { ArrayData, ArrayElement, ArrayIndex, ArrayLength } from "./types";

class Arr {
  private data: ArrayData;
  private length: ArrayLength;

  constructor() {
    this.data = {};
    this.length = 0;
  }

  get isEmpty(): boolean {
    return this.length === 0;
  }

  at(index: ArrayIndex) {
    let element = this.data[index];

    if (element) return element;
    return undefined;
  }

  push(element: ArrayElement) {
    this.data[this.length] = element;
    this.length++;
  }

  remove(index: ArrayIndex): void {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  insert(index: ArrayIndex, element: any) {
    for (let i = this.length - index; i > 0; i--) {
      this.data[i + 1] = this.data[i];
    }

    this.data[index] = element;
    this.length++;
  }

  prepend(element: ArrayElement) {
    this.insert(0, element);
  }

  pop() {
    let element = this.data[this.length - 1];
    delete this.data[this.length - 1];

    return element;
  }
}

export default Arr;
