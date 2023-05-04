import LinkedNode from "./utils/linked-node";

class LinkedList {
  head: LinkedNode | null;
  tail: LinkedNode | null;
  size: number;

  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  public insert(index: number, value: any): void {
    const node = new LinkedNode(value);
    const leader = this.traverseToIndex(index - 1);

    if (leader === null) {
      throw new Error("Sorry, the index is not valid!");
    }

    const pointer = leader.next;

    node.next = pointer;
    leader.next = node;
    this.size++;
  }

  private traverseToIndex(index: number): LinkedNode | null {
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

    if (this.head === null || this.tail === null) {
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

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  public remove(index: number): void {
    const leader = this.traverseToIndex(index - 1);
    const element = this.traverseToIndex(index);

    if (!element || !leader) {
      return;
    }

    leader.next = element.next;
    this.size--;
  }

  public get isEmpty(): boolean {
    return this.size === 0;
  }

  public at(index: number): LinkedNode | null {
    const targetNode = this.traverseToIndex(index);
    return targetNode;
  }

  public reverse(): void {
    if (this.head === null || this.size < 2) {
      throw new Error("Sorry, you can't reverse");
    }

    this.tail = this.head;

    // There is a Bug Here
    let current: any = this.head;
    let previous = null;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }

  public getAllValues(): any[] {
    if (this.head === null || this.tail === null) {
      return [];
    }

    const values: any[] = [this.head.value];

    // There is a Bug Here!
    let current: any = this.head;

    do {
      values.push(current.next.value);
      current = current.next;
    } while (current.next !== null);

    return values;
  }
}

export default LinkedList;
