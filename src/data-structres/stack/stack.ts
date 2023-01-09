import StackNode from "./stackNode";

class Stack {
  size: number;
  top: StackNode;
  bottom: StackNode;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  peek(): StackNode {
    return this.top;
  }
}

export default Stack;
