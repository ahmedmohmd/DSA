import LinkedNode from "./LinkedNode";

class LinkedList {
  head: LinkedNode;
  tail: LinkedNode;
  size: number;

  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  public insert(index, value) {
    const node = new LinkedNode(value);
    const leader = this.traverseToIndex(index - 1);
    const pointer = this.head.next;

    node.next = pointer;
    leader.next = node;
    this.size++;
  }

  private traverseToIndex(index: number): LinkedNode {
    let step = 0;
    let current = this.head;

    while (current && step < index) {
      current = current.next;
      step++;
    }

    return current;
  }

  public append(value: any): void {
    const node = new LinkedNode(value);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  public prepend(value: any): void {
    const node = new LinkedNode(value);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.next = node;
      this.head = node;
    }

    this.size++;
  }

  public remove(index: number): void {
    const leader = this.traverseToIndex(index - 1);
    const element = this.traverseToIndex(index);

    leader.next = element.next;
    this.size--;
  }

  public get isEmpty(): boolean {
    return this.size === 0;
  }

  public at(index: number): LinkedNode {
    const targetNode = this.traverseToIndex(index);
    return targetNode.value;
  }

  public reverse(): void {
    if (this.size < 2) {
      return;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
  }

  public getAllValues(): any[] {
    const values: any[] = [this.head.value];
    let current = this.head;

    do {
      values.push(current.next.value);
      current = current.next;
    } while (current.next !== null);

    return values;
  }
}

export default LinkedList;
