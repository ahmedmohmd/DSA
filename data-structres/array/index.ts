class Arr {
  private data: { [key: string]: any };
  private length: number;

  constructor() {
    this.data = {};
    this.length = 0;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  at(index: number) {
    let element = this.data[index];

    if (element) return element;
    return undefined;
  }

  push(element: any) {
    this.data[this.length] = element;
    this.length++;
  }

  remove(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  insert(index, element: any) {
    for (let i = this.length - index; i > 0; i--) {
      this.data[i + 1] = this.data[i];
    }

    this.data[index] = element;
    this.length++;
  }

  prepend(element) {
    this.insert(0, element);
  }

  pop() {
    let element = this.data[this.length - 1];
    delete this.data[this.length - 1];

    return element;
  }
}
