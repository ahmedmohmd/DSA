class QueueNode {
  value: any;
  next: QueueNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export default QueueNode;
