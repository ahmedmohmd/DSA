import StackNode from "./stack-node";

class Stack {
  private size: number;
  private top: StackNode;
  private bottom: StackNode;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  public peek(): StackNode {
    return this.top;
  }

  public push(value: any): void {
    const node = new StackNode(value);

    if (this.size === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      node.next = this.top;
      this.top = node;
    }

    this.size++;
  }

  public pop(): any {
    if (this.size === 0) {
      return undefined;
    }

    if (this.size === 1) {
      const poppedItem = this.top;
      this.top = null;
      this.bottom = null;
      this.size--;

      return poppedItem.value;
    }

    const poppedItem = this.top;
    this.top = this.top.next;
    this.size--;

    return poppedItem.value;
  }

  public getSize(): number {
    return this.size;
  }
}

export default Stack;
