import type { ArrayData, ArrayElement } from "./utils/types";

class Arr {
  private data: ArrayData;
  private length: number;

  constructor() {
    this.data = {};
    this.length = 0;
  }

  public get isEmpty(): boolean {
    return this.length === 0;
  }

  public at(index: number): ArrayElement {
    let element = this.data[index];

    if (element) return element;
    return undefined;
  }

  public push(element: ArrayElement): void {
    this.data[this.length] = element;
    this.length++;
  }

  public remove(index: number): void {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  public insert(index: number, element: any): void {
    for (let i = this.length - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }

    this.data[index] = element;
    this.length++;
  }

  public prepend(element: ArrayElement): void {
    this.insert(0, element);
  }

  public pop(): ArrayElement {
    let element = this.data[this.length - 1];
    delete this.data[this.length - 1];

    return element;
  }

  public size(): number {
    return this.length;
  }
}

export default Arr;
