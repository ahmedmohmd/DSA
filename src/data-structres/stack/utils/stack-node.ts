class StackNode {
  value: any;
  next: StackNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export default StackNode;
